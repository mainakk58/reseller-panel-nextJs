import { useEffect, useState } from "react";
import { Button, Input, Modal } from "rsuite";

type Reseller = {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  state: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  data: Reseller;
  onSave: (updated: Reseller) => void;
};

export default function CommonModal({ open, onClose, data, onSave }: Props) {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    if (open) setFormData(data);
  }, [data, open]);

  const handleChange = (key: keyof Reseller, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} size="sm" backdrop="static">
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button appearance="primary" onClick={handleSave}>
          Save
        </Button>
        <Button appearance="subtle" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
