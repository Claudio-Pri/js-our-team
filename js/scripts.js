console.log('js collegato');

//===== Appunti ======
// ` backtick

//===== Code ======
// milestone 0-- creare un array di oggetti per rappresentare i membri del team.
const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',


    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',

    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',

    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',


    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',

    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',

    },
];
console.log(ourTeam, typeof ourTeam);

for (let i = 0; i < ourTeam.length; i++) {
    console.log(ourTeam[i]);

}


//===== Functions =====