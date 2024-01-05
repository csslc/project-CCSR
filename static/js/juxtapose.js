<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="description"
        content="StableSR is a generic image SR method by efficiently leveraging prior encapsulated in Stable Diffusion.">
  <meta name="keywords" content="Image Super-resolution, Diffusion Model, Stable Diffusion">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>StableSR | MMLab@NTU</title>

  <link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro"
        rel="stylesheet">

  <link rel="stylesheet" href="../static/css/bulma.min.css">
  <link rel="stylesheet" href="../static/css/bulma-carousel.min.css">
  <link rel="stylesheet" href="../static/css/bulma-slider.min.css">
  <link rel="stylesheet" href="../static/css/fontawesome.all.min.css">
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
  <link rel="stylesheet" href="../static/css/index.css">
  <link rel="icon" href="./images/logo.svg">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script defer src="../static/js/fontawesome.all.min.js"></script>
  <script src="../static/js/bulma-carousel.min.js"></script>
  <script src="../static/js/bulma-slider.min.js"></script>
  <script src="../static/js/index.js"></script>

  <!-- Vendor Stylesheets -->
  <!--=================js==========================-->
  <link rel="stylesheet" href="../static/css/tab_gallery.css">
  <link rel="stylesheet" href="../static/css/juxtapose.css">
  <!-- <script src="./static/js/index.js"></script> -->
  <!-- <link rel="stylesheet" href="./menlo"> -->
  <link rel="stylesheet" href="../static/css/image_card_fader.css">
  <link rel="stylesheet" href="../static/css/image_card_slider.css">
</head>
<body>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start" style="flex-grow: 1; justify-content: center;">
      <a class="navbar-item" href="https://iceclear.github.io">
      <span class="icon">
          <i class="fas fa-home"></i>
      </span>
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More Research
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="https://github.com/sczhou/Upscale-A-Video">
            Upscale-A-Video
          </a>
          <a class="navbar-item" href="https://zsyoaoa.github.io/projects/resshift/">
            ResShift
          </a>
          <a class="navbar-item" href="https://github.com/IceClear/CLIP-IQA">
            CLIP-IQA
          </a>
          <a class="navbar-item" href="https://github.com/IceClear/MW-GAN">
            MW-GAN
          </a>
        </div>
      </div>
    </div>

  </div>
</nav>


<section class="hero">
  <div class="hero-body">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h1 class="title is-1 publication-title">Exploiting Diffusion Prior for Real-World Image Super-Resolution</h1>
          <div class="is-size-5 publication-authors">
            <span class="author-block">
              <a href="https://iceclear.github.io">Jianyi Wang</a>, </span>
            <span class="author-block">
              <a href="https://zsyoaoa.github.io">Zongsheng Yue</a>, </span>
            <span class="author-block">
              <a href="https://shangchenzhou.com">Shangchen Zhou</a>,
            </span>
            <span class="author-block">
              <a href="https://ckkelvinchan.github.io">Kelvin C.K. Chan</a>,
            </span>
            <span class="author-block">
              <a href="https://www.mmlab-ntu.com/person/ccloy/index.html">Chen Change Loy</a>,
            </span>
          </div>

          <div class="is-size-5 publication-authors">
            <span class="author-block">S-Lab, Nanyang Technological University</span>
          </div>

          <div class="column has-text-centered">
            <div class="publication-links">
              <!-- PDF Link. -->
              <span class="link-block">
                <a href="https://arxiv.org/pdf/2305.07015.pdf"
                   class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                      <i class="fas fa-file-pdf"></i>
                  </span>
                  <span>Paper</span>
                </a>
              </span>
              <span class="link-block">
                <a href="https://arxiv.org/abs/2305.07015"
                   class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                      <i class="ai ai-arxiv"></i>
                  </span>
                  <span>arXiv</span>
                </a>
              </span>
              <!-- Code Link. -->
              <span class="link-block">
                <a href="https://github.com/IceClear/StableSR"
                   class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                      <i class="fab fa-github"></i>
                  </span>
                  <span>Code</span>
                  </a>
              <!--
              </span>
              Dataset Link.
              <span class="link-block">
                <a href="https://github.com/google/nerfies/releases/tag/0.1"
                   class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                      <i class="far fa-images"></i>
                  </span>
                  <span>Data</span>
                  </a> -->
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--=================Teasers==========================-->
<section class="hero is-small">
  <div class="hero-body">
    <div class="container is-max-desktop has-text-centered">
      <!-- The expanding image container -->
      <div class="tab_container">
        <!-- Close the image -->
        <!-- <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span> -->

        <!-- Expanded image -->
        <div id="juxtapose-embed" data-startingposition="30%" data-animate="true" class="juxtapose"
          style="height: 800px; width: 800px;">
          <!-- <div class="jx-slider">
            <div class="jx-handle " style="left: 50%;">
              <div class="jx-arrow jx-left"></div>
              <div class="jx-control">
                <div class="jx-controller" tabindex="0" role="slider" aria-valuenow="50" aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
              <div class="jx-arrow jx-right"></div>
            </div>
            <div class="jx-image jx-left " style="width: 50%;"><img src="./src/UDC_1.png" alt="">
              <div class="jx-label" tabindex="0">UDC images</div>
            </div>
            <div class="jx-image jx-right " style="width: 50%;"><img src="./src/AF_1.png" alt="">
              <div class="jx-label" tabindex="0">AlignFormer results</div>
            </div><a href="https://juxtapose.knightlab.com" target="_blank" rel="noopener" class="jx-knightlab">
              <div class="knightlab-logo"></div><span class="juxtapose-name">JuxtaposeJS</span>
            </a>
          </div> -->
        </div>

        <div>
          <div id="juxtapose-hidden"></div>
        </div>

        <!-- Image text -->
        <div id="imgtext"></div>
      </div>

      <!-- The grid: four columns -->
      <div class="tab_row">
        <div class="tab_column">
          <img src="images/building_LQ.png" onclick="tab_gallery_click('building');">
        </div>
        <div class="tab_column">
          <img src="images/Lincoln_LQ.png" onclick="tab_gallery_click('Lincoln');">
        </div>
        <div class="tab_column">
          <img src="images/OST_120full_LQ.png" onclick="tab_gallery_click('OST_120full');">
        </div>
        <div class="tab_column">
          <img src="images/1-1Z626233153-51full_LQ.png" onclick="tab_gallery_click('1-1Z626233153-51full');">
        </div>
        <div class="tab_column">
          <img src="images/2841_709551_375529full_LQ.png" onclick="tab_gallery_click('2841_709551_375529full');">
        </div>
        <div class="tab_column">
          <img src="images/comic3full_LQ.png" onclick="tab_gallery_click('comic3full');">
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section">
  <div class="container is-max-desktop">
    <!-- Paper video. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Video</h2>
        <div class="publication-video">
          <iframe src="https://www.youtube.com/embed/5MZy9Uhpkw4"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <!--/ Paper video. -->
    <!-- Abstract. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Abstract</h2>
        <div class="content has-text-justified">
          <p>
            We present a novel approach to leverage prior knowledge encapsulated in pre-trained text-to-image diffusion models for blind super-resolution (SR). Specifically, by employing our time-aware encoder, we can achieve promising restoration results without altering the pre-trained synthesis model, thereby preserving the generative prior and minimizing training cost.
            To remedy the loss of fidelity caused by the inherent stochasticity of diffusion models, we introduce a controllable feature wrapping module that allows users to balance quality and fidelity by simply adjusting a scalar value during the inference process.
            Moreover, we develop a progressive aggregation sampling strategy to overcome the fixed-size constraints of pre-trained diffusion models, enabling adaptation to resolutions of any size.
            A comprehensive evaluation of our method using both synthetic and real-world benchmarks demonstrates its superiority over current state-of-the-art approaches.
          </p>
        </div>
      </div>
    </div>
    <!--/ Abstract. -->
    <!--=================Method==========================-->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Method</h2>
        <div class="content has-text-justified">
      <!-- <h3 class="title is-4">Overview of the AlignFormer</h3> -->
      <div style="text-align: center; vertical-align:middle">
        <img src="images/network.png" width="800">
      </div>
      <div align="center">
        <b>Framework of StableSR.</b>
      </div>
      <p>
        We first finetune the time-aware encoder that is attached to a fixed pre-trained Stable Diffusion model.
        Features are combined with trainable spatial feature transform (SFT) layers. Such a simple yet effective design is capable of leveraging rich diffusion prior for image SR. Then, the diffusion model is fixed.
        Inspired by CodeFormer, we introduce a controllable feature wrapping (CFW) module to obtain a tuned feature in a residual manner, given the additional information from LR features and features from the fixed decoder of autoencoder.
        With an adjustable coefficient, CFW can trade between quality and fidelity. We further enable arbitrary-size super-resolution by applying an aggregation sampling strategy.
      </p>
    </div>
  </div>
</div>
    <!--=================Results==========================-->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Results</h2>
        <div class="content has-text-justified">
        <div style="text-align: center; vertical-align:middle">
          <img src="images/results.svg" width="800">
        </div>
        <div align="center">
          <b>Visual results on real-world images (4x).</b>
        </div>
    </div>
  </div>
</div>
</div>
</section>


<section class="section" id="BibTeX">
  <div class="container is-max-desktop content">
    <h2 class="title">BibTeX</h2>
    <pre><code>@article{wang2023exploiting,
  author    = {Wang, Jianyi and Yue, Zongsheng and Zhou, Shangchen and Chan, Kelvin C.K. and Loy, Chen Change},
  title     = {Exploiting Diffusion Prior for Real-World Image Super-Resolution},
  journal   = {arXiv preprint arXiv:2305.07015},
  year      = {2023},
}</code></pre>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <a class="icon-link"
         href="https://arxiv.org/pdf/2305.07015.pdf">
        <i class="fas fa-file-pdf"></i>
      </a>
      <a class="icon-link" href="https://github.com/IceClear" class="external-link" disabled>
        <i class="fab fa-github"></i>
      </a>
    </div>
    <div class="columns is-centered">
      <div class="column is-8">
        <div class="content">
          <p>
            If you have any question, please contact us at <strong>iceclearwjy@gmail.com</strong>.
          </p>
          <p>
            This website is licensed under a <a rel="license"
                                                href="http://creativecommons.org/licenses/by-sa/4.0/">Creative
            Commons Attribution-ShareAlike 4.0 International License</a>.
          </p>
          <p>
            Website adapted from the following <a
              href="https://github.com/nerfies/nerfies.github.io">source code</a>.
          </p>
        </div>
      </div>
    </div>
    <div class="content has-text-centered">
      <script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=200&t=tt&d=b89NXOYqUHfLvWGQRzA1ijzlQxoNwNUQfgFn3AtlHEE"></script>
    </div>
  </div>
</footer>

<!-- Image Slider Javascripts -->
<!--=================Functions==========================-->
<script src="../static/js/juxtapose.js"></script>


<script>
  var slider;
  let origImages = [
    { "src": "images/building_LQ.png", "label": "Zoomed LQ images", },
    { "src": "images/building_HQ.png", "label": "StableSR results", }
  ];
  let origOptions = {
    "makeResponsive": true,
    "showLabels": true,
    "mode": "horizontal",
    "showCredits": true,
    "animate": true,
    "startingPosition": "50"
  };

  const juxtaposeSelector = "#juxtapose-embed";
  const transientSelector = "#juxtapose-hidden";


  function tab_gallery_click(name) {
    // Get the expanded image
    let inputImage = {
      label: "Zoomed LQ images",
    };
    let outputImage = {
      label: "StableSR results",
    };

    inputImage.src = "images/".concat(name, "_LQ", ".png")
    outputImage.src = "images/".concat(name, "_HQ", ".png")

    let images = [inputImage, outputImage];
    let options = slider.options;
    options.callback = function (obj) {
      var newNode = document.getElementById(obj.selector.substring(1));
      var oldNode = document.getElementById(juxtaposeSelector.substring(1));
      console.log(obj.selector.substring(1));
      console.log(newNode.children[0]);
      oldNode.replaceChild(newNode.children[0], oldNode.children[0]);
      //newNode.removeChild(newNode.children[0]);

    };

    slider = new juxtapose.JXSlider(transientSelector, images, options);
  };

  (function () {
    slider = new juxtapose.JXSlider(
      juxtaposeSelector, origImages, origOptions);
    //document.getElementById("left-button").onclick = replaceLeft;
    //document.getElementById("right-button").onclick = replaceRight;
  })();
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  // expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = name;
  // Show the container element (hidden with CSS)
  // expandImg.parentElement.style.display = "block";

  $(".flip-card").click(function () {
    console.log("fading in")
    div_back = $(this).children().children()[1]
    div_front = $(this).children().children()[0]
    // console.log($(this).children("div.flip-card-back"))
    console.log(div_back)
    $(div_front).addClass("out");
    $(div_front).removeClass("in");

    $(div_back).addClass("in");
    $(div_back).removeClass("out");

  });

  $(".flip-card").mouseleave(function () {
    console.log("fading in")
    div_back = $(this).children().children()[1]
    div_front = $(this).children().children()[0]
    // console.log($(this).children("div.flip-card-back"))
    console.log(div_back)
    $(div_front).addClass("in");
    $(div_front).removeClass("out");

    $(div_back).addClass("out");
    $(div_back).removeClass("in");

  });
</script>

</body>
</html>