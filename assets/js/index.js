!(function (n) {
  function t(n, t, e) {
    let i = new Date(Date.now() + 864e5 * e).toUTCString();
    document.cookie = `${n}=${t}; expires=${i}; path=/`;
  }
  function e(n) {
    let t = document.cookie.split("; ").reduce((n, t) => {
      let [e, i] = t.split("=");
      return (n[e] = i), n;
    }, {});
    return t[n];
  }
  function i(n) {
    let e = $(".ri-sun-line"),
      i = $(".ri-moon-clear-line");
    "light" === n
      ? ($("html").removeClass("dark").addClass("light"),
        i.slideUp(300, function () {
          e.slideDown(300);
        }),
        t("theme", "light", 365))
      : ($("html").removeClass("light").addClass("dark"),
        e.slideUp(300, function () {
          i.slideDown(300);
        }),
        t("theme", "dark", 365));
  }
  let h = e("theme");
  function c() {
    let n = Math.floor(100 * Math.random()),
      t = Math.floor(100 * Math.random()),
      e = ["+", "-", "*", "/"],
      i = e[Math.floor(Math.random() * e.length)],
      h;
    switch (i) {
      case "+":
        h = n + t;
        break;
      case "-":
        h = n - t;
        break;
      case "*":
        h = n * t;
        break;
      case "/":
        h = 0 !== t ? (n / t).toFixed(2) : n;
    }
    let c = h < 10 ? "0" + h : h;
    return `${n < 10 ? "0" + n : n}.${t < 10 ? "0" + t : t}.${c}`;
  }
  "light" === h ? i("light") : i("dark"),
    $("body").on("click", ".change-theme", function () {
      let n = $("html").hasClass("dark");
      i(n ? "light" : "dark");
    }),
    "close" === e("toast") && $("#toast-prompt").hide(),
    $("body").on("click", ".close-btn", function () {
      $("#toast-prompt").slideUp("fast", function () {
        let n = new Date(Date.now() + 6e5).toUTCString();
        document.cookie = `toast=close; expires=${n}; path=/`;
      }),
        FuiToast.success("Kh\xf4ng hiển thị lại trong 10 ph\xfat.");
    }),
    $("body").on("click", ".confirm-btn", function () {
      !(function n() {
        fetch("https://api.thanhdieu.com/rand-music.php")
          .then((n) => n.json())
          .then((t) => {
            let e = t.musicUrl,
              i = new Audio(e),
              h = new Promise((e, h) => {
                i
                  .play()
                  .then(() => {
                    e(t);
                  })
                  .catch((n) => {
                    h("Kh\xf4ng thể ph\xe1t nhạc ngay l\xfac n\xe0y.");
                  }),
                  i.addEventListener("ended", function () {
                    e("Đ\xe3 chuyển sang b\xe0i h\xe1t mới."), n();
                  });
              });
            FuiToast.promise(
              h,
              {
                loading: "Đang chờ ph\xe1t nhạc...",
                success: (n) => n.titleTracks,
                error: "C\xf3 lỗi khi ph\xe1t nhạc!",
              },
              { isClose: !0 }
            ),
              $("#toast-prompt").slideUp("fast");
          })
          .catch((n) => {
            FuiToast.error("C\xf3 lỗi khi lấy nhạc từ API!");
          });
      })();
    });
  let o = 0;
  $("body").append(
    `<div id="fui-toast"></div><div class="td-lock-screen"><section class="td-welcome"><div class="medias"><video class="pc item_video" autoplay loop muted playsinline><source src="./assets/video/pc.mp4?v=${c()}" type="video/mp4"></video><video class="mobile item_video" autoplay loop muted playsinline><source src="./assets/video/mb.mp4?v=${c()}" type="video/mp4"></video><div class="date"></div></div><div class="infos"><div class="logo-web-title"><img class="logo-ws" src="https://i.imgur.com/dxVZLOG.png" alt="Array Cyber"><span class="web-title">${
      $("html").attr("data-title-loader") || "M\xe0n H\xecnh Kho\xe1"
    }</span></div><span class="web_desc"></span><div><i class="ri-arrow-down-line close-lockscreen"></i></div></div></section></div>`
  );
  let a = (n, t) => Math.floor(Math.random() * (t - n + 1)) + n,
    s = (n) => {
      n.style.setProperty("--star-left", `${a(-10, 100)}%`),
        n.style.setProperty("--star-top", `${a(-40, 80)}%`),
        (n.style.animation = "none"),
        n.offsetHeight,
        (n.style.animation = "");
    };
  for (let r of document.getElementsByClassName("magic-star"))
    setTimeout(() => {
      s(r), setInterval(() => s(r), 1e3);
    }, o++ * (1e3 / 3));
  let l = document.getElementById("croll-to-top"),
    g = l.querySelector(".text"),
    m = l.querySelector("i");
  0 === window.scrollY && (l.style.display = "none"),
    window.addEventListener("scroll", function () {
      let n = window.scrollY,
        t = document.documentElement.scrollHeight,
        e = window.innerHeight,
        i = 0;
      t > e && (i = (n / (t - e)) * 100),
        (g.textContent = Math.round(i)),
        n > 0 ? (l.style.display = "block") : (l.style.display = "none");
    }),
    l.addEventListener("mouseenter", function () {
      (g.style.display = "none"), (m.style.display = "inline-block");
    }),
    l.addEventListener("mouseleave", function () {
      (g.style.display = "inline-block"), (m.style.display = "none");
    }),
    l.addEventListener("click", function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    }),
    $(document).on({
      contextmenu: function (n) {
        console.log("ctx menu button:", n.which), n.preventDefault();
      },
    });
  var d = 0,
    u = [
      "#ff6651",
      "#42a5f5",
      "#66bb6a",
      "#ab47bc",
      "#ffa726",
      "#ec407a",
      "#26c6da",
      "#78909c",
      "#ffca28",
      "#5c6bc0",
      "#8d6e63",
      "#26a69a",
    ];
  jQuery(document).ready(function (n) {
    n("body").click(function (t) {
      var e = [
          "♥️ Năm mới vui vẻ",
          "❤️ Cung hỉ ph\xe1t t\xe0i",
          "\uD83D\uDC9B Tiền v\xf4 như nước",
          "\uD83D\uDC9A Vợ đẹp con ngoan",
          "\uD83D\uDC99 T\xe0i lộc v\xe0o nh\xe0",
          "\uD83D\uDC9C Ph\xfac thọ v\xf4 bi\xean",
          "\uD83D\uDDA4 Sống khoẻ đ\xf3n xu\xe2n",
          "\uD83D\uDC96 Ph\xfa qu\xfd c\xe1t tường",
          "\uD83D\uDC9D Đắc lộc to\xe0n gia",
          "\uD83D\uDC99 Hạnh ph\xfac m\xeanh mang",
          "❤️ Vạn sự th\xe0nh c\xf4ng",
          "\uD83D\uDC9A M\xe3 đ\xe1o th\xe0nh c\xf4ng",
          "\uD83D\uDC99 Tiền v\xf4 tỷ tỷ",
          "\uD83D\uDC9C T\xe0i vạn c\xf4ng danh",
          "\uD83D\uDC9B Hạnh ph\xfac gia an",
          "\uD83D\uDC96 Sức khoẻ như voi",
          "\uD83D\uDC9B Th\xf4ng minh vượt trội",
          "\uD83D\uDC96 Ph\xfac lộc trong tay",
          "\uD83D\uDC9A Gia chủ ph\xe1t t\xe0i",
          "\uD83D\uDC9A Vạn sự như \xfd",
          "\uD83D\uDC9A T\xfai tiền nặng k\xfd ",
          "\uD83D\uDDA4 L\xe0m ăn ph\xe1t đạt",
          "\uD83D\uDC9B V\xe0ng bạc cao sang",
          "\uD83D\uDC99 Sức khỏe an nh\xe0n",
          "\uD83D\uDC9C C\xf4ng danh hết \xfd",
          "\uD83D\uDDA4 Cung hỷ cung hỷ",
          "\uD83D\uDC9D Hạnh ph\xfac triền mi\xean",
          "\uD83D\uDDA4 Sung sướng như ti\xean",
        ],
        i = n("<span style='font-family:sans-serif;'>").text(e[d]),
        h = u[Math.floor(Math.random() * u.length)];
      d = (d + 1) % e.length;
      var c = t.pageX,
        o = t.pageY;
      i.css({
        "z-index": Math.floor(9990001 * Math.random()) + 9999,
        top: o - 20,
        left: c,
        position: "absolute",
        "font-weight": "bold",
        color: h,
      }),
        n("body").append(i),
        i.animate({ top: o - 180, opacity: 0 }, 1500, function () {
          i.remove();
        });
    });
  });
  class p {
    constructor(n) {
      (this.element = $(n)),
        this.TimeNows(),
        setInterval(() => this.TimeNows(), 1e3);
    }
    TimeNows() {
      let n = new Date(),
        t = n.getHours().toString().padStart(2, "0"),
        e = n.getMinutes().toString().padStart(2, "0"),
        i = n.getSeconds().toString().padStart(2, "0");
      this.element.text(`${t}:${e}:${i}`);
    }
  }
  function y() {
    $.ajax({
      url: "https://api.thanhdieu.com/cham-ngon",
      type: "get",
      dataType: "json",
      success: function (n) {
        $("#cham-ngon").fadeOut(300, function () {
          $(this).text(n.msg).fadeIn(300);
        });
      },
      error: function (n, t, e) {
        console.error("Error: " + e);
      },
    });
  }
  new p("#real-time"),
    $("[data-fancybox]").length && Fancybox.bind("[data-fancybox]", {}),
    y();
  let f = new (class n {
    constructor(n) {
      this.element = n;
    }
    MessageRmd() {
      let n = new Date().getHours(),
        t;
      return (t =
        n >= 3 && n <= 10
          ? [
              "Ch\xfac c\xe1c bạn c\xf3 một buổi s\xe1ng vui vẻ, v\xe0 may mắn \uD83D\uDE07",
              "S\xe1ng nay thật đẹp, h\xe3y bắt đầu một ng\xe0y mới tr\xe0n đầy năng lượng nh\xe9! ☀️",
              "Ch\xe0o buổi s\xe1ng, đừng qu\xean ăn s\xe1ng để c\xf3 năng lượng cho cả ng\xe0y!",
              "Khi \xf4ng Mặt trời thức dậy, mẹ l\xean rẫy, em đến trường rồi m\xe0 sao m\xe0y vẫn c\xf2n ngủ hả, dậy m\xe0 đ\xf3n lấy \xe1nh nắng t\xedch cực, khởi đầu ng\xe0y mới tr\xe0n đầy năng lượng đi.",
            ]
          : n >= 11 && n <= 15
          ? [
              "Buổi trưa n\xe0y, đừng qu\xean ăn uống đầy đủ đấy nh\xe9 \uD83E\uDD24",
              "Trưa nay hơi n\xf3ng, nếu c\xf3 cần mua g\xec th\xec nhắn anh mua gi\xfap cho nh\xe9 \uD83C\uDF24️",
              "Ch\xfac bạn c\xf3 một buổi nghỉ trưa tr\xe0n đầy sức khoẻ!",
            ]
          : n >= 16 && n <= 18
          ? [
              "Ch\xfac bạn c\xf3 một buổi chiều thư gi\xe3n sau những giờ l\xe0m việc căng thẳng.",
              "Ch\xfac buổi chiều tr\xe0n đầy năng lượng t\xedch cực, để tối nay c\xf3 thể c\xe0y phim thả ga!",
              "Cả ng\xe0y h\xf4m nay t\xf4i kh\xf4ng thể ngừng nghĩ về bạn ch\xfac bạn một buổi chiều vui vẻ! \uD83C\uDF05",
            ]
          : n >= 19 && n <= 21
          ? [
              "Ch\xfac c\xe1c bạn c\xf3 một buổi tối tr\xe0n đầy hạnh ph\xfac!",
              "Buổi tối l\xe0 l\xfac để thư gi\xe3n v\xe0 tận hưởng cuộc sống \uD83C\uDF19",
              "Ch\xe0o buổi tối, đừng qu\xean d\xe0nh thời gian cho gia đ\xecnh nh\xe9 ❤️",
            ]
          : [
              "Onichan~ sao giờ n\xe0y chưa ngủ nữa ୧(๑•̀⌄•́๑)૭",
              "Khuya rồi, h\xe3y đi ngủ để mơ những giấc mơ thật đẹp nh\xe9 \uD83C\uDF0C",
              "Đ\xeam muộn thế n\xe0y, đừng qu\xean chăm s\xf3c sức khỏe nha \uD83C\uDF19",
            ])[Math.floor(Math.random() * t.length)];
    }
  })($("#waiting-loader"));
  setTimeout(() => {
    let n = f.MessageRmd();
    $("#waiting-loader").text(n);
  }, 111),
    setInterval(y, 5321);
  let b = new (class n {
    constructor(n) {
      (this.descriptions = n),
        (this.element = $(".web_desc")),
        this.Description();
    }
    Description() {
      let n =
        this.descriptions[Math.floor(Math.random() * this.descriptions.length)];
      this.element.fadeOut(500, () => {
        this.element.html(n).fadeIn(500);
      });
    }
  })([
    "Gọi em l\xe0 c\xf4ng ch\xfaa v\xec ho\xe0ng tử đang đứng chờ em n\xe8!",
    "Chưa được sự cho ph\xe9p m\xe0 đ\xe3 tự \xfd th\xedch em, anh xin lỗi nh\xe9 c\xf4ng ch\xfaa!",
    "Em nh\xecn rất giống người họ h\xe0ng của anh, đ\xf3 ch\xednh l\xe0 con d\xe2u của mẹ anh!",
    "Tr\xe1i Đất quay quanh Mặt Trời, c\xf2n em th\xec quay m\xe3i trong t\xe2m tr\xed anh!",
    "Vector chỉ c\xf3 một chiều, anh d\xe2n chuy\xean to\xe1n chỉ y\xeau một người.",
    "Anh b\xe9o thế n\xe0y l\xe0 bởi v\xec trong l\xf2ng anh c\xf3 em nữa.",
    "Nghe đ\xe2y! Em đ\xe3 bị bắt v\xec tội qu\xe1 xinh đẹp.",
    "Anh chỉ muốn b\xean cạnh em hai lần đ\xf3 l\xe0 b\xe2y giờ v\xe0 m\xe3i m\xe3i.",
    "Bao nhi\xeau c\xe2n th\xednh cho vừa, bao nhi\xeau c\xe2n bả mới lừa được em?",
    "Vũ trụ của người ta l\xe0 m\xe0u đen huyền b\xed, c\xf2n vũ trụ của anh b\xe9 t\xed, thu nhỏ lại l\xe0 em.",
    "Anh rất y\xeau th\xe0nh phố n\xe0y, kh\xf4ng phải v\xec n\xf3 c\xf3 g\xec, m\xe0 v\xec n\xf3 c\xf3 em.",
    "Anh bận với tất cả mọi điều, nhưng vẫn lu\xf4n rảnh để nhớ đến em.",
    "C\xe0nh c\xe2y c\xf2n c\xf3 l\xe1. Ch\xfa c\xe1 vẫn đang bơi, sao em cứ mải chơi. Chẳng chịu y\xeau anh thế!",
    "Em nh\xe0 ở đ\xe2u thế? Cứ tới lui trong tim anh kh\xf4ng biết đường về nh\xe0 \xe0?",
    "Cuộc đời anh vốn l\xe0 một đường thẳng, chỉ v\xec gặp em m\xe0 rẽ ngang.",
    "Với thế giới em chỉ l\xe0 một người, nhưng với anh, em l\xe0 cả thế giới.",
    "Em c\xf3 thể đừng cười nữa được kh\xf4ng, da anh đen hết rồi.",
    "Anh đ\xe2y chẳng th\xedch nhiều lời, nh\xecn em l\xe0 biết cả đời của anh.",
    "Cảm lạnh c\xf3 thể do gi\xf3, nhưng, cảm nắng th\xec chắc chắn do em.",
    "Trứng r\xe1n cần mỡ, bắp cần bơ, y\xeau kh\xf4ng cần cớ, cần em cơ!",
    "Cafe đắng th\xeam đường sẽ ngọt, c\xf2n cuộc đời anh th\xeam em sẽ hạnh ph\xfac.",
    "Giữa cuộc đời h\xe0ng ng\xe0n c\xe1m dỗ, nhưng, anh vẫn chỉ cần bến đỗ l\xe0 em.",
    "C\xf3 người rủ anh đi ăn tối, nhưng anh từ chối v\xec thực đơn kh\xf4ng c\xf3 em.",
    "Em c\xf3 biết v\xec sao đầu tuần lại bắt đầu bằng thứ hai kh\xf4ng, bởi v\xec em l\xe0 thứ nhất!",
    "Oxy l\xe0 nguồn sống của nh\xe2n loại, c\xf2n em ch\xednh l\xe0 nguồn sống của anh.",
    "Em bị cận thị \xe0? Nếu kh\xf4ng tại sao kh\xf4ng nh\xecn thấy anh th\xedch em chứ?",
    "H\xf4m qua anh gặp \xe1c mộng v\xec trong giấc mộng đ\xf3 kh\xf4ng c\xf3 em.",
    "Uống nhầm một \xe1nh mắt, cơn say theo cả đời, thương nhầm một nụ cười, cả một đời phi\xeau l\xe3ng.",
    "Dạo n\xe0y em c\xf3 thấy mỏi ch\xe2n kh\xf4ng, sao cứ đi m\xe3i trong đầu anh thế?",
    "H\xecnh như em th\xedch tr\xe0 sữa lắm phải kh\xf4ng, anh cũng th\xedch em như thế đấy.",
    "Nếu em l\xe0 nước mắt th\xec anh sẽ kh\xf4ng bao giờ kh\xf3c để lạc mất em đ\xe2u.",
    "Đ\xf4i mắt em c\xf2n xanh hơn cả Đại T\xe2y Dương v\xe0 anh th\xec bị lạc tr\xean biển cả mất rồi.",
    "Nếu nụ h\xf4n l\xe0 những b\xf4ng tuyết th\xec anh sẽ gửi đến em một cơn b\xe3o tuyết",
    "Phải chăng em l\xe0 một ảo thuật gia, bởi mỗi khi anh nh\xecn em l\xe0 mọi thứ xung quanh đều biến mất.",
    "Anh c\xf3 thể chụp ảnh em được kh\xf4ng, để chứng minh với lũ bạn rằng thi\xean thần l\xe0 c\xf3 thật.",
    "Anh c\xf3 thể đi theo em được kh\xf4ng, bởi anh được bố mẹ dạy rằng phải theo đuổi giấc mơ của m\xecnh.",
    "Nếu khi anh nghĩ đến em m\xe0 c\xf3 một ng\xf4i sao biến mất, vậy chắc cả bầu trời n\xe0y kh\xf4ng c\xf2n sao.",
  ]);
  setInterval(() => b.Description(), 7e3),
    $(".td-lock-screen").click(function () {
      $(".td-welcome").slideUp("slow"),
        $(".td-lock-screen")
          .animate({ opacity: 0 }, "slow")
          .css("pointer-events", "none");
    }),
    $(document).on("swiperight", function () {
      $(".td-welcome").slideDown("slow"),
        $(".td-lock-screen")
          .animate({ opacity: 1 }, "fast")
          .css("pointer-events", "auto");
    }),
    $(document).on("swipeleft", function () {
      $(".td-welcome").slideUp("slow"),
        $(".td-lock-screen")
          .animate({ opacity: 0 }, "slow")
          .css("pointer-events", "none");
    }),
    $(document).on("visibilitychange", function () {
      document.hidden ||
        setTimeout(function () {
          var n = $(window).scrollTop(),
            t = $(window).height(),
            e = $(document).height();
          0 === n &&
            ($(".td-welcome").slideDown("slow"),
            $(".td-lock-screen")
              .animate({ opacity: 1 }, "fast")
              .css("pointer-events", "auto")),
            100 == (n / (e - t)) * 100 &&
              ($(".td-welcome").slideUp("slow"),
              $(".td-lock-screen")
                .animate({ opacity: 0 }, "slow")
                .css("pointer-events", "none"));
        }, 200);
    }),
    new p(".date");
  let v = $("#loading-percentage"),
    w;
  w = setInterval(function () {
    var n = $(".pace-progress");
    if (n.length) {
      var t = n.attr("data-progress-text");
      if (t !== v.text()) {
        v.text(t);
        var e = parseInt(t);
        n.css("transform", "translate3d(" + e + "%, 0px, 0px)"),
          "100%" === t &&
            ($(".pace-active").animate({ top: "-100px" }, "slow", function () {
              $(this).hide();
            }),
            $("#loading-box").is(":visible")
              ? (x(),
                (WsLoaded = !0),
                $(".td-loading-v2").fadeOut("slow"),
                $("#loading-box").fadeOut("slow"))
              : $(".td-loading-v2").fadeOut("slow"),
            clearInterval(w));
      }
    }
  }, 100);
  let k = {
    endLoading() {
      x(),
        $(".td-loading-v2").fadeOut("slow"),
        $("#loading-box").fadeOut("slow"),
        (WsLoaded = !0);
    },
    initLoading() {
      (document.body.style.overflow = ""),
        $("#loading-box").removeClass("loaded");
    },
  };
  function x() {
    $("body").removeClass("loading");
  }
  $(window).on("load", () => {
    k.endLoading();
  }),
    $(document).on("pjax:send", () => {
      k.initLoading();
    }),
    $(document).on("pjax:complete", () => {
      k.endLoading();
    }),
    console.log(
      "%c My Github %c https://github.com/ArrayCyber",
      "color:#fff;background:linear-gradient(90deg,#448bff,#44e9ff);padding:5px 0;",
      "color:#000;background:linear-gradient(90deg,#44e9ff,#ffffff);padding:5px 10px 5px 0px;"
    );
  var _,
    C,
    T = new Image();
  function E(n, t, e, i, h) {
    (this.x = n), (this.y = t), (this.s = e), (this.r = i), (this.fn = h);
  }
  function q(n) {
    var t, e;
    switch (n) {
      case "x":
        t = Math.random() * window.innerWidth;
        break;
      case "y":
        t = Math.random() * window.innerHeight;
        break;
      case "s":
        t = Math.random();
        break;
      case "r":
        t = 6 * Math.random();
        break;
      case "fnx":
        (e = -0.5 + 1 * Math.random()),
          (t = function (n, t) {
            return n + 0.5 * e - 1.7;
          });
        break;
      case "fny":
        (e = 1.5 + 0.7 * Math.random()),
          (t = function (n, t) {
            return t + e;
          });
        break;
      case "fnr":
        (e = 0.03 * Math.random()),
          (t = function (n) {
            return n + e;
          });
    }
    return t;
  }
  function S() {
    requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame;
    var n,
      t,
      e,
      i,
      h,
      c,
      o,
      a,
      s = document.createElement("canvas");
    (C = !0),
      (s.height = window.innerHeight),
      (s.width = window.innerWidth),
      s.setAttribute(
        "style",
        "position: fixed;left: 0;top: 0;pointer-events: none;z-index: 8888;"
      ),
      s.setAttribute("id", "canvas_sakura"),
      document.getElementsByTagName("body")[0].appendChild(s),
      (a = s.getContext("2d"));
    for (var r = new SakuraList(), l = 0; l < 10; l++)
      (t = q("x")),
        (e = q("y")),
        (h = q("r")),
        (i = q("s")),
        (c = q("fnx")),
        (o = q("fny")),
        (randomFnR = q("fnr")),
        (n = new E(t, e, i, h, { x: c, y: o, r: randomFnR })).draw(a),
        r.push(n);
    _ = requestAnimationFrame(function () {
      a.clearRect(0, 0, s.width, s.height),
        r.update(),
        r.draw(a),
        (_ = requestAnimationFrame(arguments.callee));
    });
  }
  function A() {
    if (C) {
      var n = document.getElementById("canvas_sakura");
      n.parentNode.removeChild(n), window.cancelAnimationFrame(_), (C = !1);
    } else S();
  }
  (sakura = "//i.ibb.co/mN296Wb/thanhdieu.png"),
    (leaf = "//i.ibb.co/mN296Wb/thanhdieu.png"),
    (maple = "//i.ibb.co/mN296Wb/thanhdieu.png"),
    (user = ""),
    (T.src = maple),
    (E.prototype.draw = function (n) {
      n.save(),
        this.s,
        n.translate(this.x, this.y),
        n.rotate(this.r),
        n.drawImage(T, 0, 0, 30 * this.s, 30 * this.s),
        n.restore();
    }),
    (E.prototype.update = function () {
      (this.x = this.fn.x(this.x, this.y)),
        (this.y = this.fn.y(this.y, this.y)),
        (this.r = this.fn.r(this.r)),
        (this.x > window.innerWidth ||
          this.x < 0 ||
          this.y > window.innerHeight ||
          this.y < 0) &&
          ((this.r = q("fnr")),
          Math.random() > 0.4
            ? ((this.x = q("x")),
              (this.y = 0),
              (this.s = q("s")),
              (this.r = q("r")))
            : ((this.x = window.innerWidth),
              (this.y = q("y")),
              (this.s = q("s")),
              (this.r = q("r"))));
    }),
    ((SakuraList = function () {
      this.list = [];
    }).prototype.push = function (n) {
      this.list.push(n);
    }),
    (SakuraList.prototype.update = function () {
      for (var n = 0, t = this.list.length; n < t; n++) this.list[n].update();
    }),
    (SakuraList.prototype.draw = function (n) {
      for (var t = 0, e = this.list.length; t < e; t++) this.list[t].draw(n);
    }),
    (SakuraList.prototype.get = function (n) {
      return this.list[n];
    }),
    (SakuraList.prototype.size = function () {
      return this.list.length;
    }),
    (window.onresize = function () {
      document.getElementById("canvas_snow");
    }),
    (T.onload = function () {
      S();
    }),
    $("body").on("click", "[data-ws-copy]", function (n) {
      n.preventDefault();
      var t = $(this).data("ws-copy");
      if (navigator.clipboard)
        navigator.clipboard.writeText(t).then(
          function () {
            FuiToast.success("Đ\xe3 sao ch\xe9p v\xe0o bộ nhớ tạm!");
          },
          function (n) {
            FuiToast.error("Sao ch\xe9p thất bại: " + n);
          }
        );
      else {
        var e = $("<textarea>").val(t).appendTo("body").select();
        try {
          document.execCommand("copy"),
            FuiToast.success("Đ\xe3 sao ch\xe9p v\xe0o bộ nhớ tạm!");
        } catch (i) {
          FuiToast.error("Sao ch\xe9p thất bại: " + i);
        }
        e.remove();
      }
    });
})();
