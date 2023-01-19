
let school = {
name:"GBC",
location:"Toronto",
students: 1000,
male:{
    firstname:"Onur",
    lastname:"Korkmaz"
}
,female:{
    firstname:"Rihanna",
    lastname:"Korkmaz"

}
,capacity:function(limit){
    if(limit>this.students){
        return "We dont have a space for student"
    }else{
        return "We have space for student";
    }
}
,length:{
    left:40,
    right:50
} // askin for help
,display:function(xl,xf){
    return this.left=xl ," ", this.right=xf;

}

};

console.log(school.female.firstname, " ", school.female.lastname);



var query ="name";
console.log(school[query]);

console.log(school.display(10,5));

