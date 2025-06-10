import StatusBadge from "./Status";
const users = [
  { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
  { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
  { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
  { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
  { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
  { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
  { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
  { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" }
];
export default function Users() {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-black">All Customers</h2>
          <p className="text-sm text-[#16C098]">Active Members</p>
        </div>
        <div className="flex gap-4">
          <input type="text" placeholder="Search" className="border-none bg-gray-200 rounded-lg h-[40px] px-4 py-2 text-sm placeholder:text-[#808080]"/>
          <span className="relative right-[55px] top-[8px] text-[#808080]"><span class="material-symbols-outlined">search</span></span>
          <div className="text-gray-500 w-[200px] rounded-xl h-[40px] bg-gray-200 text-center py-[7px] flex items-center justify-center gap-[5px]">Short by : <span className="text-black font-bold">Newest</span><span class="material-symbols-outlined">keyboard_arrow_down</span></div>
        </div>
      </div>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-[#B5B7C0] border-b">
            <th className="py-3">Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-[#292D32]">
          {users.map((user, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="py-4">{user.name}</td>
              <td>{user.company}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.country}</td>
              <td><StatusBadge status={user.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-6 text-xs text-gray-400">
        <p>Showing data 1 to 8 of 256K entries</p>
        <div className="flex gap-1">
          <button className="cursor-pointer px-3 py-1 border rounded"><span class="material-symbols-outlined">chevron_left</span></button>
          <button className="cursor-pointer px-3 py-1 border rounded font-semibold bg-[#5932EA] text-white">1</button>
          <button className="cursor-pointer px-3 py-1 border rounded">2</button>
          <button className="cursor-pointer px-3 py-1 border rounded">3</button>
          <button className="cursor-pointer px-3 py-1 border rounded">4</button>
          <span className="cursor-pointer px-3 py-1">...</span>
          <button className="cursor-pointer px-3 py-1 border rounded">40</button>
          <button className="cursor-pointer px-3 py-1 border rounded"><span class="material-symbols-outlined">chevron_right</span></button>
        </div>
      </div>
    </div>
  )
};