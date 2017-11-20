export default class ElementBuilder {
	
	public static createElement(tag: string): HTMLElement {

		return <HTMLElement> document.createElement(tag);
	}
}