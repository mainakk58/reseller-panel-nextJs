import TeacherDashboard from "@/components/page/teacher/TeacherDashboard";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex">
      <TeacherDashboard />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
