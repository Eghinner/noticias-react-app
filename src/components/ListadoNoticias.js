import React from 'react';
import Noticia from './Noticia.js';
import styles from './ListadoNoticias.module.css';

const ListadoNoticias = ({noticias}) => {
	return (
		<div className={styles.container}>
			{noticias.map((noticia, index)=>(
				<Noticia
					key={index}
					noticia={noticia}
				/>
			))}
		</div>
	)
}

export default ListadoNoticias