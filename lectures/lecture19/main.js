// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2022/fall/`;
    data = await fetch(url).then(response => response.json());
    displayResults(data);
} 
/* Your Tasks:
    1. Output the title of the first course to the console.
    2. Output the name of the course's instructor to the console.
    3. Output the title of the first course to the #results section.
    4. Output the title and the instructor of the first course to the #results section.
    5. Output ALL of the course titles to the console.
    6. Output ALL of the course titles to the #results section.
    7. Output ALL of the diversity intensive courses to the results section.
    8. Questions to ponder:
        * How could you make this interface 
          more useful and engaging?
        * How could you allow your user to...
            * Select which department they want to view?
            * Select which term they want to view?
            * Only view classes that meet on Tuesdays and Thursdays? 
*/
function displayResults(data) {
    document.querySelector('#results').innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        const course = data[i];
        console.log(course);
        
        const department = document.querySelector('#department')
        if (department === "") {
            displayCourse(course);
        } else if (course.department == department) {
            displayCourse(course)
        }
    }
   function displayCourse() { 
    let instructor ='TBD';
    if (data[i].Instructors.length > 0) {
                instructor = data[i].Instructors[0].Name;
            }
    
            const template = 
            <section class="course">
            <h2>${data[i].Code}: ${data[i].Title}</h2>
            <p>${data[i].Location.FullLocation}</p>
            <p>${data[i].Instructors[0]/name}</p>
            </section>
            ;
            
            document.querySelector('#results').insertAdjacentHTML("beforeend")
        }        
    
    }



