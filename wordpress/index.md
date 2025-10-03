---
layout: default
title: WordPress Tutorials
order: 0
---

* TOC
{:toc}

## Was ist WordPress?

WordPress ist ein Open-Source-CMS (Content Management System). Das bedeutet, dass der Benutzer über einen Login in den Adminbereich der Webseite alle Inhalte eigenhändig anpassen oder erweitern kann.

[» WordPress Webseite](https://de.wordpress.org/)

---

## Unterschied zwischen wordpress.org und wordpress.com

Es gibt zwei unterschiedliche Möglichkeiten, eine WordPress-Webseite einzurichten.

**1. Installation der Software auf einem eigenen Hosting-Paket**

Hier bei wird die Software über einen Installer beim Hoster oder manuell via Download von wordpress.org auf dem Hosting-Paket eingerichtet und mit der gewünschten Domain verknüpft.

Normalerweise arbeiten wir mit diesem Set-up.

**2. Anlegen eines wordpress.com-Accounts**

wordpress.com ist das kommerzielle SaaS-Angebot (Software as a service) von Automattic, dem Entwickler von WordPress. Über das Anlegen eines Accounts bekommst Du von wordpress.com eine eigene Installation unter einer Subdomain aufgesetzt (euer-seitentitel.wordpress.com).

Leider können bei der kostenlosen Variante nicht alle Plugins und auch keine eigenen Themes installiert werden. Außerdem speichert Automattic Statistiken und Besucherdaten auf amerikanischen Servern, so dass diese Lösung nicht mit der DSGVO kompatibel ist.

---

## Anforderungen

Für die Installation von WordPress bei einem Hoster gibt es eigene Anforderungen an das Hosting-Paket. Grundsätzlich sollte auf dem Hosting-Paket PHP als Skriptsprache verfügbar sein, ebenso wie eine MySQL/Maria-Datenbank.

[» WordPress Anforderungen](https://de.wordpress.org/about/requirements/)

---

## Technisches

Wie schon oben erwähnt, besteht eine WordPress-Installation aus zwei Komponenten:

1. Dateien, gespeichtert auf dem Webspace des Hosters
2. Datenbank


In der Datenbank werden folgende Dinge gespeichert:
* Textinhalte
* Kommentare zu Beiträgen
* Verknüpfungen von Beiträgen zu Kategorien oder Schlagworten
* Benutzeraccounts und Angaben zu den jeweiligen Accounts
* Allgemeine Webseiteneinstellungen


Auf dem Webspace des Hosters werden folgende Dinge gespeichert:
* Bilddateien
* Themedateien, die für das Layout der Seite verantwortlich sind
* Plugindateien, die für die jeweilige Webseite installiert wurden
