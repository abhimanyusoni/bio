jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // JavaScript Chart
  var doughnutData = [{
      value: 80,
      color: "#bf2020"
    },
    {
      value: 20,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

    // Electron Chart
    var doughnutData = [{
      value: 50,
      color: "#bf2020"
    },
    {
      value: 50,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("electron").getContext("2d")).Doughnut(doughnutData);

  // Bootstrap Chart
  var doughnutData = [{
    value: 80,
    color: "#bf2020"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

  // Adobe XD Chart
  var doughnutData = [{
    value: 80,
    color: "#bf2020"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("figmaxd").getContext("2d")).Doughnut(doughnutData);

  // SASS/Less Chart
  var doughnutData = [{
    value: 70,
    color: "#bf2020"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("sass").getContext("2d")).Doughnut(doughnutData);

  // bootstraptail Chart
  var doughnutData = [{
    value: 70,
    color: "#bf2020"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("bootstraptail").getContext("2d")).Doughnut(doughnutData);

  // MUI Chart
  var doughnutData = [{
    value: 60,
    color: "#bf2020"
  },
  {
    value: 40,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("matui").getContext("2d")).Doughnut(doughnutData);

  // WordPress Chart
  var doughnutData = [{
    value: 55,
    color: "#bf2020"
  },
  {
    value: 45,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);

    // WordPress Chart
    var doughnutData = [{
      value: 50,
      color: "#bf2020"
    },
    {
      value: 50,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("mongodb").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 90,
    color: "#bf2020"
  },
  {
    value: 10,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // Photoshop Chart
  var doughnutData = [{
    value: 70,
    color: "#bf2020"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);

  // Illustrator Chart
  var doughnutData = [{
    value: 50,
    color: "#bf2020"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);
});
