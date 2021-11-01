import React from 'react';
import Noticia from './Noticia.js';
import styles from './ListadoNoticias.module.css';

const ListadoNoticias = ({news}) => {
	return (<div className={styles.container}>
		{
		news.map((noticiawap, index)=>(<Noticia
						key={index}
						noticiawap={noticiawap}/>
		))}
			</div>
	)
}

export default ListadoNoticias