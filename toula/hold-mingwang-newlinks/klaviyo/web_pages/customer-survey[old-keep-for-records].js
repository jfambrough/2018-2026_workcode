<!-- BEGIN EMBED -->
<div class="typeform-widget" data-url="https://toulama.typeform.com/to/UyeHC6ih" data-hide-headers="true" data-hide-footer="true" style="width: 100%; height: 800px;"></div>
<script>// <![CDATA[
// begin custom script

  // get query string from url or window
  var queryString = window.location.search;
  var typeFormUrlAttr = $('.typeform-widget').attr('data-url');
  var fullDataAttr = typeFormUrlAttr.concat(queryString);

  $(function() {
    console.log("custom typeform js running")
    // if query string exists, replace data-url attribute with full url
    if (queryString !== "") {
      $('.typeform-widget').attr('data-url', fullDataAttr);
    } else {
      fullDataAttr = "";
    };
  });
  // end custom script

  // <![CDATA[
  (function() {
    var qs, js, q, s, d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm",
      b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
      js = ce.call(d, "script");
      js.id = id;
      js.src = b + "embed.js";
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q)
    }
  })()
// ]]></script>
<!-- END EMBED -->
