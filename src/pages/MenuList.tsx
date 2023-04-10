import { useMemo } from 'react'

export default function MenuList() {
  const menus = useMemo<string[]>(() => ['Example Text'], [])

  const menusEl = useMemo(
    () =>
      menus.map((menu) => (
        <div className="ml-4 text-lg font-medium ">{menu}</div>
      )),
    [menus]
  )
  return (
    <div className="w-1/5 h-screen text-sm bg-gray-200 md:text-lg sm:hidden">
      <div className="flex items-center">
        <ul>{menusEl}</ul>
      </div>
    </div>
  )
}
