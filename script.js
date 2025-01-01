/* Prepare sample resolution
   I need a list of resolutions to randomly pick from. Each resolution is a string in an array.
   This makes it easy to access them by index.
*/
const RESOLUTIONS = [
    "Improve time management skills",
    "Read more books for personal growth",
    "Expand my professional network",
    "Set clearer career goals",
    "Find a mentor (or be one)",
    "Attend more industry events",
    "Start a side hustle",
    "Build a personal brand",
    "Increase productivity by focusing on one task at a time",
    "Work smarter, not harder",
    "Create a budget and stick to it",
    "Practice gratitude daily",
    "Get better at saying no",
    "Focus on personal development",
    "Become more confident in meetings",
    "Take breaks to avoid burnout",
    "Learn how to delegate effectively",
    "Improve public speaking skills",
    "Focus on work-life balance",
    "Set a fitness routine that fits my schedule",
    "Start a podcast or blog",
    "Learn a new language to expand my horizons",
    "Be more proactive in my career",
    "Stop procrastinating and take action",
    "Organize my workspace for maximum productivity",
    "Develop better problem-solving skills",
    "Work on emotional intelligence",
    "Take on more leadership opportunities",
    "Learn the basics of investing",
    "Volunteer for causes that matter",
    "Master a new tech tool or software",
    "Join a professional organization",
    "Take more vacations to recharge",
    "Practice mindfulness in high-stress moments",
    "Cut down on unnecessary meetings",
    "Be more assertive in negotiations",
    "Create a long-term financial plan",
    "Strengthen communication skills",
    "Collaborate more effectively with colleagues",
    "Focus on building positive habits",
    "Start setting weekly goals",
    "Develop better listening skills",
    "Prioritize mental health",
    "Find a new productivity hack every month",
    "Set boundaries for a healthier work-life balance",
    "Focus on creating value at work",
    "Stay up-to-date with industry trends",
    "Start investing in personal growth",
    "Make decisions faster and more confidently",
    "Be more adaptable to changes",
    "Take ownership of my career progression",
    "Incorporate more creative thinking into problem-solving",
    "Learn to say no to tasks that don't align with my goals",
    "Celebrate small wins along the way",
    "Improve my writing skills for professional use",
    "Contribute more ideas during team meetings",
    "Be a more effective team player",
    "Make time for self-reflection and growth",
    "Be mindful of my online presence",
    "Strengthen my negotiation skills",
    "Create a personal website or portfolio",
    "Start creating passive income streams",
    "Be more proactive in seeking feedback",
    "Spend more time with positive, supportive people",
    "Attend a networking event every month",
    "Start saying ‘thank you’ more often",
    "Improve my work habits by tracking progress",
    "Take up a new hobby outside of work",
    "Use weekends for personal development",
    "Start a gratitude journal",
    "Develop a morning routine that sets me up for success",
    "Learn to delegate more responsibilities",
    "Spend less time on social media",
    "Become a better listener",
    "Identify and address my weaknesses",
    "Set personal and professional boundaries",
    "Start a daily exercise routine",
    "Be more proactive about my health",
    "Improve my emotional resilience",
    "Set aside time for creative work",
    "Work on creating long-term goals and sticking to them",
    "Plan my week on Sundays",
    "Stop comparing myself to others",
    "Be more organized in both personal and professional life",
    "Focus on deep work without distractions",
    "Learn the art of saying no politely",
    "Increase my self-awareness",
    "Take responsibility for my mistakes and learn from them",
    "Encourage others and build a supportive team culture",
    "Start meditating daily",
    "Focus on sustainable living and practices",
    "Invest in my mental health",
    "Use time-blocking to stay on top of tasks",
    "Find a balance between ambition and relaxation",
    "Attend personal development conferences",
    "Practice mindful eating",
    "Take part in more collaborative projects",
    "Get better at managing multiple projects at once",
    "Be more consistent with my goals",
    "Improve my email communication",
    "Start reading articles or books related to my field every week",
    "Commit to a digital detox once a week",
    "Start using a planner to stay organized",
    "Practice patience in stressful situations",
    "Join a professional development group",
    "Learn more about effective leadership",
    "Take more calculated risks in business",
    "Focus on building meaningful relationships",
    "Try to step outside my comfort zone more often",
    "Take regular breaks to boost productivity",
    "Implement a 'no meetings' day",
    "Start managing my stress levels more effectively",
    "Work on developing a growth mindset",
    "Make learning a daily habit",
    "Focus on the bigger picture",
    "Embrace challenges and learn from failure",
    "Travel to new places to expand my perspective",
    "Take a weekend trip every month",
    "Experience a new culture every year",
    "Plan and stick to a healthier diet",
    "Try a new workout routine or activity",
    "Drink more water and stay hydrated",
    "Prioritize sleep and establish a bedtime routine",
    "Spend more time outdoors and in nature",
    "Take care of my mental health regularly",
    "Go for a walk or run every day",
    "Make time for family and friends regularly",
    "Explore a new city or town every year",
    "Start meal prepping to save time and eat healthier",
    "Learn how to cook new, healthy meals",
    "Spend less time in front of screens",
    "Start a new fitness challenge",
    "Cut back on junk food and sugar",
    "Take up a new outdoor activity like hiking or biking",
    "Learn to enjoy cooking and food prep",
    "Join a fitness class or group",
    "Create a travel bucket list and start ticking it off",
    "Take short breaks throughout the workday to refresh",
    "Stay consistent with my workout goals",
    "Learn to relax and unwind after a long day",
    "Take part in a health or wellness retreat",
    "Plan and execute a ‘staycation’ to recharge",
    "Travel without worrying about work",
    "Go on a digital detox vacation",
    "Start a health journal to track progress",
    "Build a morning routine that energizes me",
    "Plan family trips and bonding activities"
];

/* Set up the instance of the Fireworks library and configure it */

// Initialize fireworks with the correct setup, including configurations
const fireworks = new Fireworks.default(document.getElementById('fireworkCanvas'), {
    rocketsPoint: {
        min: 50,  // Minimum number of rockets
        max: 50   // Maximum number of rockets
    },
    hue: {
        min: 0,   // Min hue (red)
        max: 360  // Max hue (purple)
    },
    delay: {
        min: 0.015, // Minimum delay between fireworks
        max: 0.03   // Maximum delay between fireworks
    },
    lineWidth: {
        explosion: {
            min: 1,  // Min line width for explosion
            max: 3   // Max line width for explosion
        },
        trace: {
            min: 1,  // Min line width for trace
            max: 2   // Max line width for trace
        }
    },
    lineStyle: 'round',   // Firework lines will be round
    speed: 2,             // Firework speed
    acceleration: 1.05,    // Acceleration of fireworks
    friction: 0.95,       // Friction affecting the trajectory
    gravity: 1.5,         // Gravity pulling the fireworks down
    particles: 50,        // Number of particles per firework
    traceLength: 3,       // Length of the trace behind the rocket
    flickering: 50,       // Flickering effect of fireworks
    opacity: 0.5,         // Opacity of fireworks
    explosion: 5,         // Explosion strength
    intensity: 30,        // Intensity of the fireworks
    traceSpeed: 10,       // Speed of the trace
    autoresize: true,     // Automatically resize based on window size
    brightness: { 
        min: 50,  // Min brightness of fireworks
        max: 80   // Max brightness of fireworks
    },
    decay: {
        min: 0.015, // Min decay speed of fireworks
        max: 0.03   // Max decay speed of fireworks
    },
    mouse: { 
        click: false,  // Fireworks won’t start on mouse click
        move: false,   // Fireworks won’t start on mouse move
        max: 1          // Maximum number of fireworks on mouse events
    },
    boundaries: { 
        x: 50,    // X-boundary of fireworks
        y: 50,    // Y-boundary of fireworks
        width: 0, // Width boundary
        height: 0 // Height boundary
    },
    sound: {
        enable: true, // Enable sound for fireworks
        files: [
            'explosion0.mp3' // Firework sound files
        ],
        volume: { min: 4, max: 8 } // Sound volume range
    }
});

// Button click listener to generate and display the resolution
document.getElementById('generateBtn').addEventListener('click', () => {
    // Capture user input for first and last name
    const FIRSTNAME = document.getElementById('firstName').value.trim();
    const LASTNAME = document.getElementById('lastName').value.trim();

    // Validate user input
    if (!FIRSTNAME) {
        alert("Please enter your first name");
        return;
    }

    if (!LASTNAME) {
        alert("Please enter your last name");
        return;
    }

    // Randomly select a resolution
    const RANDOMINDEX = Math.floor(Math.random() * RESOLUTIONS.length);
    const RESOLUTION = RESOLUTIONS[RANDOMINDEX];

    // Display the resolution in the results container
    const RESULTS_CONTAINER = document.querySelector('.results');
    RESULTS_CONTAINER.innerHTML = `
        <h4>Happy New Year, ${FIRSTNAME} ${LASTNAME}!</h4>
        <p>Your resolution: <strong>${RESOLUTION}</strong></p>
    `;

    // Trigger fireworks
    fireworks.start();

    // Stop fireworks after 60 seconds
    setTimeout(() => fireworks.stop(), 60000);
});
