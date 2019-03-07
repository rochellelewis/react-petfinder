import React from "react";
import {PetMedia, PetPhoto} from "petfinder-client";

interface Props {
	media: PetMedia
}

interface State {
	active: number,
	photos: PetPhoto[]
}
class Carousel extends React.Component<Props, State> {
	public state = {
		photos: [],
		active: 0
	};

	// this function is a React builtin
	public static getDerivedStateFromProps({ media }: Props) {
		let photos: PetPhoto = [];
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
	public handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
		if(!(event.target instanceof HTMLElement)) {
			return;
		}

		if(event.target.dataset.index) {
			this.setState({
				// cast this string into a number - coercion
				active: +event.target.dataset.index
			});
		}
	};

	public render() {
		const { photos, active } = this.state;

		// handle if no current active photo
		const hero = photos[0]
			? photos[active].value
			: "https://fillmurray.com/g/300/300";

		return (
			<div className="carousel">
				<img src={hero} alt="primary animal" />
				<div className="carousel-smaller">
					{photos.map((photo: PetPhoto, index) => (
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
