export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-8">
      <h1 className="text-2xl font-bold text-[#000] mb-12 flex items-end"><div className="flex gap-[10px] items-center justify-center"><span class="material-symbols-outlined">settings</span>Dashboard </div><span className="font-[500] text-[12px] text-gray-400">v.01</span></h1>
      <ul className="space-y-4 text-sm text-[#9197B3] font-medium">
        <li className="hover:text-black transition flex px-[10px] items-center hustify-center gap-[10px] cursor-pointer"><span class="material-symbols-outlined">key</span>Dashboard</li>
        <li className="hover:text-black transition flex px-[10px] items-center hustify-center gap-[10px] cursor-pointer"><span class="material-symbols-outlined">view_in_ar</span>Product</li>
        <li className="bg-[#5932EA] text-white rounded-lg px-[10px] py-2 flex items-center cursor-pointer hustify-center gap-[10px]"><span class="material-symbols-outlined">account_circle</span>Customers</li>
        <li className="hover:text-black transition flex px-[10px] items-center hustify-center gap-[10px] cursor-pointer"><span class="material-symbols-outlined">account_balance_wallet</span>Income</li>
        <li className="hover:text-black transition flex px-[10px] items-center hustify-center gap-[10px] cursor-pointer"><span class="material-symbols-outlined">percent</span>Promote</li>
        <li className="hover:text-black transition flex px-[10px] items-center hustify-center gap-[10px] cursor-pointer"><span class="material-symbols-outlined">live_help</span>Help</li>
      </ul>
    </div>
  )
};