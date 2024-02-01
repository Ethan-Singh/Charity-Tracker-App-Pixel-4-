//Used to manage data i.e. data inputted from user
//Stores user details, charity details, and colletions

export default class DataManager {
  //For multiple users (couldn't manage to make it work)
  //users = [];

  static myInstance = null;

  //Stores user details
  userID = "";
  name = "";
  email = "";
  password = "";
  books = [];

  //Stores charity details (depending on the one clicked)
  currCharityName = "";
  currCharityDesc = "";

  //Some categories to start off with
  categories = [
    {
      label: "Health",
      value: 1,
      icon: "hospital-box",
      backgroundColor: "#A53838",
    },
    {
      label: "Education",
      value: 2,
      icon: "school",
      backgroundColor: "#3AA538",
    },
    {
      label: "Welfare",
      value: 3,
      icon: "handshake",
      backgroundColor: "#C09600",
    },
  ];

  //Can call this function instead of creating a new object
  static getInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  //Getter and Setter for userID's
  getUserID() {
    return this.userID;
  }

  static setUserID(id) {
    this.userID = id;
  }

  //Gets and Adds new charities
  getBooks(id) {
    return this.books.filter((book) => book.userid === id);
  }

  addBook(book) {
    this.books.push(book);
  }

  //Getter and Setter for user details
  getName() {
    return this.name;
  }

  setDetails(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  //Getter and Setter for more charity details ("More Information Screen")
  setCharityDetails(currCharityName, currCharityDesc) {
    this.currCharityName = currCharityName;
    this.currCharityDesc = currCharityDesc;
  }

  getCurrCharityName() {
    return this.currCharityName;
  }

  getCurrCharityDesc() {
    return this.currCharityDesc;
  }

  //Gets and Adds New Collections
  getCategories(id) {
    return this.categories.filter((category) => category.userid === id);
  }

  addCategory(category) {
    this.categories.push(category);
  }
}
