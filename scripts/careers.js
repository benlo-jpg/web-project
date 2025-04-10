// get the input and where to show jobs
const search = document.getElementById('search');
const jobContainer = document.getElementById('jobs'); 
const filters = document.getElementsByClassName('check');

// set up some dummy jobs for presentation purposes
const jobs = [
    {name: "Software Engineer", type: "Software"},
    {name: "Frontend Developer", type: "Software"},
    {name: "Backend Developer", type: "Software"},
    {name: "Application Manager", type: "Managerial"},
    {name: "Lead Content Creator", type: "Marketing"},
    {name: "Growth & Marketing Strategist", type: "Marketing"},
    {name: "Question Management", type: "Education"},
    {name: "Curriculum & Question Lead", type: "Education"},
]

const getFilters = function () {
    let selected = []; 
    let numChecked = 0; // number of items checed

    for ( const filter of filters ) {
        if ( filter.checked ) {
            selected.push(filter.id); // only set checked filters
            numChecked++;
        }
    }

    if ( numChecked == 0 ) {
        selected = ["Software", "Managerial", "Marketing", "Education"]; // automatically have all filters applied
    }
    
    return selected;
}
const addJob = function (title, type) { 

    // dynamic html 
    cardHTML = `
    <div class="job">
        <h3>${title}</h3>
        <div class="tags">
            <p>remote</p>
            <p>${type}</p>
        </div>        
    </div>`;

    // add to the DOM 
    jobContainer.innerHTML += cardHTML; 
}

const runSearch = function () {

    // Reset job html 
    jobContainer.innerHTML = '';
    // Value being searched and filters applied
    const searchInput  = search.value.toLowerCase(); // event ? event.target.value.toLowerCase() : '';
    const selected = getFilters();   
    
    // filter job array 
    const results = jobs.filter( job => ( job.name.toLowerCase().includes(searchInput) && selected.includes(job.type)  ));
    

    results.forEach( job => {
        // add job into html
        addJob(job.name, job.type);
    });

}

runSearch(); // inialise the search 

search.addEventListener('input', runSearch);
for ( const filter of filters ) 
    filter.addEventListener('input', runSearch);
