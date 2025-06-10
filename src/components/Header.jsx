export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-xl font-semibold text-[#000]">Hello Evano 👋🏻</h2>
      </div>
      <div className="relative">
        <input type="text" placeholder="Search" className="bg-white border-none rounded-lg px-4 py-2 w-64 text-sm placeholder:text-[#B5B7C0]"/>
        <span className="absolute right-3 top-2.5 text-[#B5B7C0]"><span class="material-symbols-outlined">search</span></span>
      </div>
    </div>
  )
};