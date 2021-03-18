namespace Component {
  export class Header {
    constructor() {
      this.render();
    }

    render() {
      const DIVNode = document.createElement('div');
      DIVNode.innerHTML = '这是 Header';
      document.body.appendChild(DIVNode);
    }
  }

  export class Body {
    constructor() {
      this.render();
    }

    render() {
      const DIVNode = document.createElement('div');
      DIVNode.innerHTML = '这是 Body';
      document.body.appendChild(DIVNode);
    }
  }

  export class Footer {
    constructor() {
      this.render();
    }

    render() {
      const DIVNode = document.createElement('div');
      DIVNode.innerHTML = '这是 Footer';
      document.body.appendChild(DIVNode);
    }
  }
}

console.log(Component);
