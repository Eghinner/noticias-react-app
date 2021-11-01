import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect.js';

const Formulario = ({guardarCategoria}) => {

	 // array de opciones para select
	const OPCIONES = [
		{value: 'general', label: 'General'},
		{value: 'business', label: 'Negocios'},
		{value: 'entertainment', label: 'Entretenimiento'},
		{value: 'health', label: 'Salud'},
		{value: 'science', label: 'Ciencia'},
		{value: 'sports', label: 'Deportes'},
		{value: 'technology', label: 'Tecnologia'}
	]


	//custom hook
	const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

	const buscarNoticia = e => {
    e.preventDefault();
    guardarCategoria(categoria);

  }

	return (
		<React.Fragment>
			<div className={styles.container}>
				<form
					className={styles.form}
					onSubmit={buscarNoticia}
				>
					<h2 className={styles.heading}>Encuentra las últimas noticas</h2>
					<SelectNoticias

					/>
					<div className="">
						<input
							type="submit"
							className={styles.btnblock}
							value="Buscar"
						/>
					</div>
				</form>
			</div>
		</React.Fragment>
	)
}

export default Formulario