class Students{
    constructor(name, matricNo, major) {
    this.name = name;
    this.matricNo = matricNo;
    this.major = major;
    }

    /*
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
    */

    Name = (name= this.name) =>
    `Name: ${name}`;
    
    /*
    get MatricNo() {
        return this.matricNo;
    }
    set MatricNo(matricNo) {
        this.matricNo = matricNo;
    }
    */

    MatricNo = (matricNo = this.matricNo) =>
    `MatricNo: ${matricNo}`;

    /*
    get Major() {
        return this.major;
    }
    set Major(major) {
        this.major = major;
    }
    */
    Major = (major = this.major) =>
    `Major: ${major}`;
    
}

module.exports = {Students};

