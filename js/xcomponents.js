class QLabel {
    constructor(name, parent, classname="QLabel") {
        this.callback=null;
        this.name = name;
        this.parent = parent;
        this.div= document.createElement('div');
        this.parent.append(this.div);
        this.div.classList.add(classname);
        this.div.innerHTML=this.name;
    }

    setCallBack(f){
        this.callback=f;
        this.div.addEventListener('click', this.callback, false);
    }

    getDiv(){
        return this.div;
    }

}
