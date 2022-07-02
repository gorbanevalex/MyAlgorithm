class Node{
	constructor(name,phone){
		this.name = name;
		this.phone = phone;
		this.left = null;
		this.right = null;
	}
}
class BinaryTree{
	constructor(){
		this.root = null;
	}
	insert(name,phone){
		let newNode = new Node(name,phone);
		if(this.root == null){
			this.root = newNode;
		}else{
			this.insertNewNode(this.root,newNode);
		}
	}
	insertNewNode(root,newNode){
		if(root.name<newNode.name){
			if(root.left == null){
				root.left = newNode;
			}else{
				this.insertNewNode(root.left,newNode);
			}
		}else{
			if(root.right == null){
				root.right = newNode;
			}else{
				this.insertNewNode(root.right,newNode);
			}
		}
	}
	printTree(node){
		if(node!=null){
			console.log(node.name);
			this.printTree(node.left);
			this.printTree(node.right);
		}
	}
	search(node,value){
		if(node==null){
			return null;
		}else{
			if(node.name<value){
				return this.search(node.left,value)
			}else if(node.name>value){
				return this.search(node.right,value);
			}else if(value === node.name){
				return node;
			}else{
				console.log(value + ' ' + node.name);
				return null;
			}
		}
	}
	searchMin(node){
		if(node.right == null){
			return node;
		}else{
			return this.searchMin(node.right);
		}
	}
	getPhone(node,value){
		if(node == null){
			return null;
		}else{
			if(node.name<value){
				return this.search(node.left,value)
			}else if(node.name>value){
				return this.search(node.right,value);
			}else if(value === node.name){
				return node.phone;
			}else{
				return null;
			}
		}
	}
	remove(node,value){
		if(node==null){
			return null;
		}else if(node.name<value){
			node.left = this.remove(node.left,value);
			return node;
		}else if(node.name>value){
			node.right = this.remove(node.right,value);
			return node;
		}else{
			if(node.right == null){
				node = node.left;
				return node;
			}else if(node.left == null){
				node = node.right;
				return node;
			}
			let newNode = this.searchMin(node.right);
			node.name = newNode.name;
			node.right = this.remove(node.right,newNode.name);
			return node;
		}
	}
}
BTS = new BinaryTree();


