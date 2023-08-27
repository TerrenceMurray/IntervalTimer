interface IStack<T> {
	push(value: T): boolean;
	pop(): T | undefined;
	peek(index?: number): T | undefined;
	isEmpty: boolean;
	size: number;
}
/**
 * @method push Add a value to the top of the stack and returns a boolean.
 * @method pop Remove a value from the top of the stack or undefined.
 * @method peek Returns a value from the top of the stack or from stated index.
 */
export default class Stack<T> implements IStack<T> {
	private items: T[] = [];

	get isEmpty(): boolean {
		return this.items.length === 0;
	}

	get size(): number {
		return this.items.length;
	}

	public peek(index?: number): T | undefined {
		// Check if items is empty
		if (this.isEmpty) return undefined;

		return index === undefined ? this.items[this.items.length - 1] : this.items[index];
	}

	public push(value: T): boolean {
		try {
			this.items.push(value);
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}

	public pop(): T | undefined {
		return this.items.pop();
	}
}
