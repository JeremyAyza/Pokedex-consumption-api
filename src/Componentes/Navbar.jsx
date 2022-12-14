import React, { useContext } from 'react'
import { FavoritesContext } from '../Context/favoritesContex'




export default function Navbar() {


	const {favoritos} = useContext(FavoritesContext)
	const urlImgPokedex = "https://camo.githubusercontent.com/418d92ecbe7cd1805153001a34147ab7c965103432ff4a68eaa2fc5d4e6c1b42/68747470733a2f2f696b2e696d6167656b69742e696f2f6877796b73766a3469762f706f6b656465785f4e5f576757724a4b30732e706e67"

	return (
		<nav
			className="flex items-center justify-between bg-slate-900 object-center px-3">
			<img className='img-pokedex' src={urlImgPokedex} alt="Pokedex" />
			<div className='text-white pr-2 font-semibold'>
				Favorites ❤ : {favoritos.length}
			</div>
		</nav>
	)
}
