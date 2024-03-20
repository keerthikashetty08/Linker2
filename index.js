const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
const cards = document.querySelectorAll('.column');
  cards.forEach(card => {
    card.id = 'card-container';
  });
  function generateCards(cardDetails) {
    let cardHtml = '';
    cardDetails.forEach(card => {
      cardHtml += `
      <div class="column">
        <div class="card">
          <div class="content">
            <a href="${card.href}">${card.text}</a>
            <p>${card.description}</p>
          </div>
        </div>
        </div>
      `;
    });
    return cardHtml;
  }


  const cardDetailsJson = `[
    {
      "text": "Three.js",
    "href": "https://threejs.org/",
    "description": "A 3D library for web browsers."
},
{
    "href":"https://quickref.me/",
    "text":"QuickRef",
    "description":"Cheetsheets for all programing languages"
} ,
{
    "href":"https://faangpath.com/",
    "text":"FangPath",
    "description":"FAANGPath helps talented people connect with industry mentors to get hired by providing career resources"
} ,
{
    "href":"https://www.bluelearn.in/",
    "text":"BlueLearn",
    "description":"Learn by doing and taking inspiration from others. Talk to people about design, marketing, web3, and a lot more! "
} ,
{
    "href":"https://www.classcentral.com/",
    "text":"ClassCentral",
    "description":"Find the best courses, wherever they exist"
},
{
  "href":"https://www.dhiwise.com/",
  "text":"DhiWise",
  "description":"Build React and Flutter Apps at blazing fast speed without compromising on code-quality and developer-experience."
} ,
{
  "href":"https://www.builder.io/",
  "text":"Builder.io",
  "description":"Give your developers and marketers the toolkit to ship fast, flexible, multi-channel experiences with half the effort."
} ,
{
  "href":"https://chat2code.dev/",
  "text":"Chat2Code",
  "description":"Ready to visualize your component and generate the code"
} ,
{
  "href":"https://codemate.ai/",
  "text":"codemate",
  "description":"The fastest way to write error-free code"
},
{
  "href":"https://codedamn.com/",
  "text":"codemate",
  "description":"From zero to job ready: learning paths, interactive courses, projects, exercises and interview preparation."
},
{
  "href":"https://prezi.com/",
  "text":"Perzi",
  "description":"Presentations that move audiences"
},
{
  "href":"https://clipdrop.co/",
  "text":"ClipDrop",
  "description":"Clipdrop is a web app that lets you create stunning visuals in seconds with AI."
},
{
  "href":"https://openai.com/dall-e-2",
  "text":"Dali.e",
  "description":"DALL·E 2 is an AI system that can create realistic images and art from a description in natural language."
},
{
  "href":"https://uiverse.io/",
  "text":"Uviverso",
  "description":"Open-Source UI elements for any project, built by designers for designers."
},
{
  "href":"https://exercism.org/",
  "text":"Exercism",
  "description":"Exercism. Get really good at programming."
},
{
  "href":"https://www.cutout.pro/#google_vignette",
  "text":"Cutout",
  "description":"Cutout.Pro is a platform that leverages artificial intelligence and computer vision to offer a range of products for image and video design"
},
{
  "href":"https://toffeeshare.com/",
  "text":"toffeshare",
  "description":"Share files directly from your device to anywhere"
}
  ]`;

  const cardDetails = JSON.parse(cardDetailsJson);
  const cardHtml = generateCards(cardDetails);
  document.getElementById('card-container').innerHTML = cardHtml;