class Project
{
	constructor(name, filePathToImg, linkToFile, description)
	{
		this.name = name;
		this.imgPath = filePathToImg;
		this.description = description;
		this.link = linkToFile;
	}
}

var i = 0;

var project1 = new Project("Year 1 Final","images/Year1FinalProject.png","http://amiller90.github.io/ADGP-115/","3-D Tower Defense Game built in Unity using C# Scripting. The object of the game is to defeat all waves of enemies without dying. This game was developed with a few fellow classmates in a 6 week time span. There are different types of behavior patterns implemented into the game. The Singleton Pattern and Publisher and Subscriber pattern.");
var project2 = new Project("Unity Pong","images/Pong.png","https://amiller90.github.io/FunProject/","Pong made in unity. 1 - 2 Player capability. Use the keyboard W,A,S,D Keys for Player 1 Movement, Use the Up,Down,Left, and Right arrow keys for Player 2 movement.");
var project3 = new Project("Boids","images/Boids.png","https://amiller90.github.io/Boids/","Boids Algorithm is an algorithm that simulates the flocking behaviour of birds. Cohesion is the steering of an object towards the average position of local flockmates. Alignment is the steering towards the average heading of local flockmates. Seperation is the steering to avoid crowding local flockmates. When running the program, using the corresponding sliders on screen, you can alter the specific behaviour of the objects.");
var project4 = new Project("Cloth Simulation","images/ClothSim.png","https://amiller90.github.io/Cloth-Simulation/","Cloth Simulation is simulation of soft body physics, with respect to the use of forces on given particles to give it the soft body like behavior. There are 3 Steps in the process of cloth simulation: Apply Gravity - Apply gravity to each of the particles respectively. Apply Forces to the Spring Dampers - The spring damper is the “connector” of one particle to another. You must apply the proper spring damper forces to each of the particles in a given spring damper. The spring constant is how stiff the spring is, The damping factor is how fast or slow the spring comes to rest and the rest length is the resting position. The force equations used in this are Hook’s Law and Newton’s 2nd Law. Apply Aerodynamic Force - This adds a wind effect to the particles making up a given triangle.");
var project5 = new Project("Operation Vega","images/ParticleGaze.png","https://github.com/AMiller90/OperationVega/releases/download/Alpha1/OperationVega.zip","Operation Vega is a Sci-Fi game based in space on an abandoned planet. The goal is to build a rocket using crafted resources, and get off of the planet. There are resources to gather, units to control, and enemies waiting to stop you from getting off the planet!");
var project6 = new Project("TicTacToe","images/TicTacToe.png","https://github.com/AMiller90/TicTacToe/releases/download/v1/TicTacToe.zip","TicTacToe in Java! Choose anywhere from a grid size of 3x3 to 10x10 and even try against the AI!");

var projects = [project1,project2,project3,project4,project5,project6];

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function arrowClick(direction)
{
	if(direction == "Left")
		i--;
	else if(direction == "Right")
		i++;
	
	if(i < 0)
		i = projects.length -1;
	else if(i > projects.length -1)
		i = 0;
	
	var linkS, image, desc;
		
	linkS = document.getElementById('projectLink');
	desc = document.getElementById('projectDescription');
	image = document.getElementById('projectImg');
	
	linkS.href = projects[i].link;
	linkS.text = projects[i].name;	
	desc.innerHTML = projects[i].description;
	image.src = projects[i].imgPath;
}