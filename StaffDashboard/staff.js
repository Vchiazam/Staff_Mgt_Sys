const MonthlySalary = [
  {
    January: {
      AverageSalary: "#60,000",
      Tax: "#600.00",
      Fine: "500.00",
    },
  },
];
let mapBox = document.querySelector(".Jan");
MonthlySalary.map((month) => (
  <div class="Jan">
    <strong>${month.January}</strong> <p>${month.AverageSalary}</p>
  </div>
));
