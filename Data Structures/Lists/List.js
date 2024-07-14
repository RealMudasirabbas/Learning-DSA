class List {
    constructor(){

        this.listSize = 0;
        this.position = 0;
        this.dataStore = [];
    }

    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize =  0;
        this.position = 0;
    }

    find(element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            
            if (element === this.dataStore[i]) {
                return i;
            }
            
        }
        return -1;
    }

    toString() {
        return this.dataStore;
    }
    insert(element,afterPostion) {
        const foundPosition = this.find(afterPostion);

        if (foundPosition > -1) {
            
            this.dataStore.splice(foundPosition + 1,0,element);
            ++this.listSize;
            return true;
        }
        return false;
    }
    append(element) {
        this.dataStore[this.listSize++] = element;
    }
    remove(element) {
        const foundElementAt = this.find(element);
        if (foundElementAt > -1) {
            this.dataStore.splice(foundElementAt,1);
            --this.listSize;
            return true;
        }
        return false
    }
    front() {
        this.position = 0;
    }
    end() {
        this.listSize - 1;
    }
    prev() {
        if (this.position > 0) {
            --this.position;
        }
    }
    next() {
        if (this.position <= this.listSize - 1) {

            ++this.position
            
        } 
    }
    length() {
        return this.listSize;
    }
    currentPosition() {
        return this.position;
    }
    moveTo(position) {
        this.position = position;
    }
    getElement() {
        return this.dataStore[this.position];
    }
    contains(element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            
            if (element === this.dataStore[i]) {
                
                return true;
            }
        }

        return false;
    }
}

const names = new List();

names.append("Shariq");
names.append("Mudasir");
names.append("Shahab");
names.append("Tariq");
names.append("Saqib");
names.append("Shakeel");

// names.front();
// console.log(names.getElement());
// names.next();
// console.log(names.getElement());
// names.next();
// names.next();
// names.prev();
// console.log(names.getElement());

// iterating through the list

for(names.front();names.currentPosition() < names.length();names.next()){
    console.log(names.getElement())
}


module.exports = List