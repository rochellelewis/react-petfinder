import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

// A snapshot test will test against a "snapshot" of the markup
// test and expect come from Jasmine via Jest and are injected into global scope
test("snapshot", () => {
	const c = create(<Details />);
	expect(c.toJSON()).toMatchSnapshot();
});

test("shows modal when toggleModal is called.", () => {
	const c = create(<Details search={() => {}} />);
	const instance = c.getInstance();

	expect(instance.state.showModal).toBe(false);
	instance.toggleModal();
	expect(instance.state.showModal).toBe(true);
});