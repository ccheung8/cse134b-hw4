// Initial 
let posts = [
  {
    title: "Tired",
    date: "2/23/2023",
    summary: "Today I barely slept and am tired. I love school."
  },
  {
    title: "Awake",
    date: "2/25/2023",
    summary: "Today I slept a lot and am tired. School is great."
  },
  {
    title: "Another one",
    date: "2/27/2023",
    summary: "Collecting rejections from jobs like it's my job."
  }
];
let localPosts = JSON.parse(localStorage.getItem("blog-list")) || [];

posts.concat(localPosts);

export function listItems() {
  let post = "";
  for (let i = 0; i < posts.length; i++) {
    post += "<h2>";
    post += posts[i].title + "</h2>";
    post +=
      "<h3>" + posts[i].date + "</h3>";
    post +=
      "<p>" + posts[i].summary + " ";
    post +=
      "<span onclick='editPost(" + i + ")'>Edit</span>" + " ";
    post +=
      "<span onclick='deletePost(" + i + ")'>Delete</span></p>";
  }

  if (posts.length === 0) {
    post = "No blog entries";
  }

  document.getElementById("blog-items").innerHTML = post;
}

export function editPost(index) {
  const editDialog = document.getElementById("editDialog");
  const editTitle = document.getElementById("editTitle");
  const editSummary = document.getElementById("editSummary");
  const editSave = document.getElementById("editSave");
  editTitle.value = posts[index].title;
  editSummary.value = posts[index].summary;
  editDialog.showModal();

  const editForm = document.getElementById("editForm");

  editForm.addEventListener('submit', function edit() {
    posts[index].title = editTitle.value;
    posts[index].summary = editSummary.value;
    listItems();
    editForm.removeEventListener('submit', edit);
  });
}

export function deletePost(index) {
  // const deleteDialog = document.getElementById("deleteDialog");
  // deleteDialog.showModal();
  posts.splice(index, 1);
  // lists new array
  listItems();
}

export function cancelAdd() {
  // clears fields if user cancels
  const blogTitle = document.getElementById("blogTitle");
  const blogSummary = document.getElementById("blogSummary");

  blogSummary.value = "";
  blogTitle.value = "";
}

export function addWindow() {
  const addDialog = document.getElementById("addDialog");
  addDialog.showModal();
}

export function add() {
  const blogTitle = document.getElementById("blogTitle");
  const blogSummary = document.getElementById("blogSummary");
  let titleValue = blogTitle.value;
  let sumValue= blogSummary.value;

  if (!sumValue || !titleValue) {
    return alert("Please fill in all fields");
  }
  
  posts.push({
    title: titleValue,
    date: new Date().toLocaleDateString("en-US"),
    summary: sumValue
  });

  localStorage.setItem("blog-list", JSON.stringify(posts));

  listItems();

  blogSummary.value = "";
  blogTitle.value = "";
  console.log(posts);

  addDialog.showModal();
}