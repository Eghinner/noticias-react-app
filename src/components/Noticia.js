import React from 'react';
import styles from './Noticia.module.css';
import img from './reactjs.png'

const Noticia = ({noticia}) => {

	const { title, description, urlToImage, url } = noticia;


	const imagen = (urlToImage==null) ? img : urlToImage;


	return (
		<div className={styles.card}>
			<img className={styles.image}
			src={imagen}
			alt={title}/>
			<div
				className={styles.contentCard}
			>

				<h3>{title}</h3>
				<p className={styles.pharaph}>{description}</p>
				<a href={url} target="_blank" rel="noreferrer"  className={styles.link}>Ver noticia</a>
			</div>
		</div>
	)
}

export default Noticia