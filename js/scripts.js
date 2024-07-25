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
const myCards = document.getElementById('my-cards-container');
for (let i = 0; i < ourTeam.length; i++) {
    // milestone 1
    console.log(ourTeam[i]);
    console.log(ourTeam[i]['name']);
    console.log(ourTeam[i]['role']);
    console.log(ourTeam[i]['image']);
    // milestone 2
    myCards.innerHTML += `

        <div class="col-4" >
            <div class="card">
                <div>
                    ${ourTeam[i]['name']}
                </div>
                <div>
                    ${ourTeam[i]['role']}
                </div>
                <div>
                    ${ourTeam[i]['image']}
                </div>
            
            </div>
        </div>
        
    `;


}


//===== Functions =====