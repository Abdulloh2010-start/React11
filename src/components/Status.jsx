export default function StatusBadge ({ status }) {
  const stat = status === "Active";
  return (
    <p className={`px-3 py-1 w-[100px] h-[30px] rounded-[5px] text-center font-medium ${stat ? "text-[#00B087] bg-[#16C0981A]" : "text-[#DF0404] bg-[#FFC5C5]"}`}>{status}</p>
  );
};