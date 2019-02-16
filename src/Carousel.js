import React from "react";

class Carousel extends React.Component {
	state = {
		photos: [],
		active: 0
	};

	// this function is a React builtin
	static getDerivedStateFromProps({ media }) {
		let photos = [];
		if (media && media.photos && media.photos.photo) {
			photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
		}

		return { photos };
	}

	/*
	 * NOTE: functions vs arrow functions have subtle difference semantics in re: to binding this (keyword)
	 * handleIndexClick will only work here as an arrow fn - will not create a new scope!
	 * arrow fn does not create a new context when it's called, reverts to the lexical scope it's in
	 **/
	handleIndexClick = event => {
		this.setState({
			// cast this string into a number - coercion
			active: +event.target.dataset.index
		});
	};

	render() {
		const { photos, active } = this.state;

		return (
			<div className="carousel">
				<img src={photos[active].value} alt="primary animal" />
				<div className="carousel-smaller">
					{photos.map((photo, index) => (
						/* eslint-disable-next-line */
						<img
							onClick={this.handleIndexClick}
							key={photo.value}
							data-index={index}
							src={photo.value}
							className={index === active ? "active" : ""}
							alt="animal thumbnail"
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;
