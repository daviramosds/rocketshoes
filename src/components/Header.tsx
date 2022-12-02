import Logo from '../assets/logo.svg'
import SearchIcon from '../assets/icon-search.svg'
import BagIcon from '../assets/icon-bag.svg'

export function Header() {
  return (
    <header className='flex items-center justify-center fixed left-0 top-0 w-full'>
      <ul className='flex items-center justify-between w-full px-16 py-8 font-bold text-lg'>
        <li className='w-11'>
          <img src={Logo} draggable={false}  />
        </li>

        <li>
          <a href="">HOMEM</a>
        </li>

        <li>
          <a href="">MULHER</a>
        </li>

        <li>
          <a href="">CRIANÇA</a>
        </li>

        <li>
          <a href="">CUSTOMIZAR</a>
        </li>

        <li >
          <div className='bg-white flex h-9'>
            <img src={SearchIcon} className="w-6 mx-2" />
            <input type={"search"} className="w-40 outline-none font-normal text-sm" placeholder='Pesquisar'></input>
          </div>
        </li>

        <li className='w-11'>
          <img src={BagIcon} />
        </li>
      </ul>
    </header>
  );
}
