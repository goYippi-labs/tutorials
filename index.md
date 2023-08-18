---
layout: default
title: Home
id: home
---

<div class="col-1 col-75-25">
<div class="col-2">

<h1 id="wordpress-tutorials">WordPress Tutorials</h1>

Die WordPress Tutorials sollen es unseren Kunden erleichtern, Ihre Arbeit mit WordPress zu starten. Aber es sind natürlich auch alle anderen Interessierten willkommen, die einen Einstieg in WordPress suchen.

<div class="button-box">
  <a href="/tutorials/wordpress/">» Zu den WordPress Tutorials</a>
</div>

<div class="clear divider"></div>

</div>
<div class="col-2 col-right">

{% capture subMenu %}{% include navigation.html context='/wordpress/' %}{% endcapture %}
{{ subMenu }}

</div>
</div>

---

<div class="col-1">
<div class="col-2">

<h2 id="cleverreach-tutorials">CleverReach Tutorials</h2>

{% capture subMenu %}{% include navigation.html context='/cleverreach/' %}{% endcapture %}
{{ subMenu }}

<div class="button-box">
  <a href="/tutorials/cleverreach/">» Zu den CleverReach Tutorials</a>
</div>


<div class="clear divider"></div>

</div>
<div class="col-2 col-right">

<h2 id="faqs">FAQs</h2>

{% capture subMenu %}{% include navigation.html context='/faq/' %}{% endcapture %}
{{ subMenu }}

<div class="button-box">
  <a href="/tutorials/faq/">» Zu den FAQs</a>
</div>

</div>
</div>
