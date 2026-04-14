 function searchStudent() {
  const studentId = document.getElementById("studentId").value.trim();

  if (studentId === "") {
    alert("Please enter Student ID");
    return;
  }

  const sampleStudent = {
    name: "Sara Ali",
    id: studentId,
    major: "ITMB",
    level: "Level 2",
    blood: "O+",
    allergy: "Penicillin",
    disease: "Asthma",
    medication: "Inhaler",
    contact: "91234567"
  };

  document.getElementById("name").textContent = sampleStudent.name;
  document.getElementById("id").textContent = sampleStudent.id;
  document.getElementById("major").textContent = sampleStudent.major;
  document.getElementById("level").textContent = sampleStudent.level;
  document.getElementById("blood").textContent = sampleStudent.blood;
  document.getElementById("allergy").textContent = sampleStudent.allergy;
  document.getElementById("disease").textContent = sampleStudent.disease;
  document.getElementById("medication").textContent = sampleStudent.medication;
  document.getElementById("contact").textContent = sampleStudent.contact;

  if (sampleStudent.allergy !== "-" || sampleStudent.disease !== "-") {
    document.getElementById("alertBox").style.display = "block";
  } else {
    document.getElementById("alertBox").style.display = "none";
  }
} 
function searchStudent() {
  const studentId = document.getElementById("studentId").value.trim();

  if (studentId === "") {
    alert("Please enter Student ID");
    return;
  }

  let student;

  if (studentId === "NU230318") {
    student = {
      name: "Baraah Suliaman Al-Hinai",
      id: "NU230318",
      major: "ITMB",
      level: "Level 2",
      blood: "O+",
      allergy: "Penicillin",
      disease: "Asthma",
      medication: "Inhaler",
      contact: "91234567"
    };
  } else if (studentId === "NU230174") {
    student = {
      name: "Lamees Nabil Al-Shahani",
      id: "NU230174",
      major: "ITMB",
      level: "Level 2",
      blood: "A+",
      allergy: "None",
      disease: "None",
      medication: "None",
      contact: "92345678"
    };
  } else if (studentId === "NU230322") {
    student = {
      name: "Doa Maqbool Al-Balushi",
      id: "NU230322",
      major: "ITMB",
      level: "Level 2",
      blood: "B+",
      allergy: "None",
      disease: "Diabetes",
      medication: "Insulin",
      contact: "93456789"
    };
  } else {
    student = {
      name: "Student Not Found",
      id: studentId,
      major: "-",
      level: "-",
      blood: "-",
      allergy: "-",
      disease: "-",
      medication: "-",
      contact: "-"
    };
  }

  document.getElementById("name").textContent = student.name;
  document.getElementById("id").textContent = student.id;
  document.getElementById("major").textContent = student.major;
  document.getElementById("level").textContent = student.level;
  document.getElementById("blood").textContent = student.blood;
  document.getElementById("allergy").textContent = student.allergy;
  document.getElementById("disease").textContent = student.disease;
  document.getElementById("medication").textContent = student.medication;
  document.getElementById("contact").textContent = student.contact;

  if (student.allergy !== "None" && student.allergy !== "-" || student.disease !== "None" && student.disease !== "-") {
    document.getElementById("alertBox").style.display = "block";
  } else {
    document.getElementById("alertBox").style.display = "none";
  }function goToDashboard(event) {
  event.preventDefault();
  window.location.href = "dashboard.html";
  return false;
}
}
function goToDashboard(event) {
  event.preventDefault();
  window.location.href = "dashboard.html";
  return false;
}