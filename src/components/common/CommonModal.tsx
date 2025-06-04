import {useEffect, useState} from "react";
import {Button, Input, Modal, SelectPicker} from "rsuite";

type Reseller = {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  state?: string;
  status?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  data: Reseller;
  onSave: (updated: Reseller) => void;
};

export default function CommonModal(props: Props) {
  const [formData, setFormData] = useState(props.data);

  useEffect(() => {
    if (props.open) setFormData(props.data);
  }, [props.data, open]);

  const handleChange = (key: keyof Reseller, value: string) => {
    setFormData((prev) => ({...prev, [key]: value}));
  };

  const handleSave = () => {
    props.onSave(formData);
    props.onClose();
  };

  const statusOptions = [
    {label: "Pending", value: "pending"},
    {label: "Verified", value: "approved"},
    {label: "Blocked", value: "blocked"},
    {label: "Rejected", value: "rejected"},
  ];

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      size="sm"
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title>Edit Reseller Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-3">
          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(val) => handleChange("name", val)}
          />
          <Input
            placeholder="Email"
            value={formData.email}
            onChange={(val) => handleChange("email", val)}
          />
          <Input
            placeholder="Phone"
            value={formData.phone}
            onChange={(val) => handleChange("phone", val)}
          />
          <Input
            placeholder="Location"
            value={formData.location}
            onChange={(val) => handleChange("location", val)}
          />
          <Input
            placeholder="State"
            value={formData.state}
            onChange={(val) => handleChange("state", val)}
          />
          <SelectPicker
            data={statusOptions}
            value={formData.status}
            onChange={(val) => handleChange("status", val || "")}
            placeholder="Select Status"
            style={{width: "100%"}}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button appearance="primary" onClick={handleSave}>
          Save
        </Button>
        <Button appearance="subtle" onClick={props.onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
