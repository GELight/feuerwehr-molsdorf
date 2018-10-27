import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { htmlSafe } from '@ember/template';

export default Route.extend({

  model() {
    return hash({
      headerSlides: [
        {
          img: '/img/main-1.jpg',
          headline: 'Sei dabei!',
          text: 'Mach mit im Förderverein der freiwilligen Feuerwehr Erfurt-Molsdorf.'
        },
        {
          img: '/img/main-2.jpg',
          headline: 'Unsere Jugend',
          text: 'Lerne alles rund um die Feuerwehr.'
        },
        {
          img: '/img/main-3.jpg',
          headline: 'Ehrenabteilung',
          text: 'Einen wehrtvoller Beitrag leisten.'
        },
        {
          img: '/img/main-4.jpg',
          headline: 'Einsatzabteilung',
          text: 'Gemeinsam für euch.'
        }
      ],
      news: [
        {
          title: 'Erfolgreiche Teilnahme am 16. Stadtausscheid',
          description: htmlSafe(`
            <p>Vom 12. bis 14.06.09 fand das jährliche Zeltlager und der damit verbundene Stadtausscheid der Erfurter Jugendfuerwehren in Erfurt-Gispersleben statt. Der Killianipark war an diesem Wochenende in fester Hand der Nachwuchsbrandbekämpfer.</p>
            <p>Höhepunkt war wieder der Wettbewerb am Samstag, welche sich in zwei Alterklassen teilte. In der AK 6-9 Jahre erkämpfte sich unsere erste Gruppe mit 840 Punkten einen guten vierten Platz. Knapp geschlagen mit nur 6 Punkten Rückstand erreichte unsere zweite Gruppe mit 860 den zweiten Platz hinter den Siegern, der ersten Gruppe aus Hochheim (866 Pkt.). Das Treppchen wurde durch den Drittplatzierten aus Dittelstedt (848) komplettiert.
            Insgesamt gingen bei der Gruppenstafette 7 Mannschaften an den Start, wobei neben Dittelstett, Stotternheim und Ilversgehofen aus Hochheim und Molsdorf jeweils 2 Gruppen antraten. </p>
            <p>An dieser Stelle ein Lob an die Verantworlichen und alle freiwilligen Helfer für ein gelungenes Wochenende.</p>
          `)
        },
        {
          title: '2. Platz beim Fußballturnier der Erfurter Jugendfeuerwehren',
          description: htmlSafe(`
            <p>Am 05.10.08 fand das diesjährige Fußballturnier der Erfurter Jugendfeuerwehren statt. Die kleinen Fußballer der JF EF-Molsdorf traten in der Altersklasse „6-9 Jahre“ zu den Spielen in der Thüringenhalle an. Gegner waren hier die Kids aus Stotternheim und Ilversgehofen, sodass jedes Team im Hin-/Rückspielmodus insgesamt vier Spiele zu absolvieren hatte.</p>
            <p>In der ersten Begegnung standen sich unser Team und Stotternheim gegenüber. Der Beginn war rasant und es entwickelte sich eine  einseitige Partie, hauptsächlich vor dem Tor der Stotternheimer. Zur Überraschung aller gelang den Kids aus Stotternheim das einzige Tor und damit der Sieg, denn unserer Mannschaft war es vergönnt, eine der zahlreichen Chancen zu nutzen.</p>
            <p>Die zweite Partie gegen Ilversgehofen nahm den gleichen Spielverlauf. Deutliche Überlegenheit unsere Mannschaft bei erneut schlechter Chancenverwertung. Erst in der letzten Minute gelang Leon Viertel der viel umjubelte Siegtreffer.</p>
            <p>Zwischenzeitlich besiegten die Stotternheimer das Team aus Ilversgehofen klar mit 3:0.</p>
            <p>Die zweite Begegnung gegen die Nord-Erfurter begann verheißungsvoll. Die Torchancen wurden jetzt genutzt und so lag unsere Mannschaft durch einen Doppelpack von Leon Viertel schnell mit 2:0 in Führung. Allerdings gelang den nicht aufgebenden Kids aus Stotternheim der Anschluss und kurz vor Schluss der Ausgleichstreffer. Am Ende hieß es 2:2.</p>
            <p>Im letzten Spiel gegen Ilversgehofen fand das Turnier mit einem verdienten 2:0 - Sieg durch Treffer von Marco Kieper und Leon Viertel einen versöhnlichen Abschluss.</p>
            <p>Ilversgehofen unterlag auch in der zweiten Begegnung gegen Stotternheim mit 0:2.</p>
            <p>Am Ende erreichten unsere Fußballer einen guten zweiten Platz hinter den Siegern aus Stotternheim. Die sehr junge Mannschaft aus Ilversgehofen belegte den dritten Rang.</p>
            <p>Ein Lob an alle Kids für die fairen und durchaus ansehnlichen Spiele.</p>
            <p>An dieser Stelle gilt der Dank den Verantwortlichen der BF Erfurt für die Durchführung des Turnieres, sowie dem Küchen-Team für die schmackhafte Verpflegung.</p>
            <p>Wir gratulieren ganz herzlich unseren Fußballern für diesen Erfolg!</p>
          `)
        },
        {
          title: 'Bambini gewinnen den ersten Wettbewerb',
          description: htmlSafe(`
            <p>Am 05.07.2008 fand der Wettbewerb im Rahmen des Stadtjugendfeuerwehrzeltlagers in EF-Dittelstedt und EF-Büßleben statt. Erstmalig wurde die Gruppenstafette, als Wettbewerb für die jüngsten Mitglieder der JF, neben dem BWB (für die Älteren) ausgetragen.</p>
            <p>Nach dem Frühstück in der kleinen Zeltstadt in Dittelstedt gings mit Bus nach Büßleben zum Wettbewerb. Für die "Großen" war der Sportplatz schon vorbereitet und auch die "Kleinen" hatten ihren eigenen Wettbewerbsplatz. Nach dem Eröffnungsappel ging es dann endlich los. Schnell noch zur Anmeldung und Ausweiskontrolle, danach knisterte es in der Luft.</p>
            <p>Den Anfang bei der Gruppenstafette machte die Gruppe 1. Der Löschangriff wurde fehlerfrei mit einer Zeit von 2:36 min absolviert. Nach der Gruppe aus Ilversgehofen konnte auch die Gruppe 2 an den Start gehen. Ebenfalls fehlerfrei und etwas schneller wurde der Löschangriff in 2:14 min hinter sich gebracht. Auch beim Knotentest konnten alle Kids ihre Fähigkeiten unter Beweis stellen, das Erkennen und Binden der wichtigsten Feuerwehrknoten stellte keine Probleme dar. Beim Wissenstest mit Fragen aus den Komplexen Allgmeinwissen, Brandschutz und feuerwehrtechnische Ausbildung konnten nur eine (Gr. 1) bzw. zwei Fragen (Gr. 2) nicht richtig beantwortet werden.
            Am Nachmittag ging es dann auf große Wandertour. Die Wanderralley führte die Kinder zurück nach Dittelstedt, durch die verschiedenen Stationen (u.a. Notruf, Himmelsrichtung und Gemüse) wurde der Weg zumindest gedanklich verkürzt.</p>
            <p>Nach dem Abendessen stieg die Spannung noch einmal. Das Festzelt war bis auf den letzten Platz gefüllt, selbst vor dem Eingang fanden sich noch Zuschauer ein. 
            Dann war es endlich soweit. Zunächst holte sich unsere Gruppe 1 mit 855 Punkten den Pokal für einen guten 6. Platz. Nachdem die Zweitplazierten Ilversgehofen und Hochheim mit 872 Pkt. genannt wurden stand auch der erste Platz fest. Unsere Gruppe 2 konnte sich mit 875 Pkt. bei ihrem ersten Wettbewerb als Sieger duchsetzen. Als dann die "Großen" beim BWB ebenfalls als Sieger aufgerufen wurde kannte die Freude keine Grenzen mehr.</p>
            <p>Nach diesem langen Tag trafen die Kids am Abend müde aber glücklich wieder in Molsdorf ein. Jetzt geht es in die verdiente "Sommerpause".</p>
            <p>Wie gratulieren nochmals allen Bambini und hoffen die Freude auf das nächste Jahr geweckt zu haben!</p>
          `)
        },
        {
          title: 'Landesausscheid der 6-9 jährigen im Pokallauf in Nägelstedt am 04.06.2016',
          description: htmlSafe(`
            <p>Da unsere Kinder vor 2 Jahren in Sonneberg den Pokallauf gewonnen haben fuhren wir dieses Jahr zur Titelverteidigung nach Nägelstedt, wo wir auch in diesem Jahr wieder die einzige Mannschaft aus Erfurt waren. Wir trafen uns um 7:30 Uhr in Molsdorf am Gerätehaus und fuhren gemeinsam mit unserem Wertungsrichter Silvio Schulze aus Erfurt- Bischleben zum Sportplatz nach Nägelstedt, wo die Wettbewerbe stattfanden. Der Pokallauf besteht aus 3 Teilen, einer Schnelligkeitsübung, zwei Puzzles und der Gerätekunde. Wir begannen mit einem Probelauf der Schnelligkeitsübung wo die Kinder noch einmal den Platz und die Übungsgeräte testen konnten. Im Anschluss erfolgte die Auswertung durch die Wertungsrichter, um dann die Fehler im Wertungslauf nicht zu wiederholen. Es folgten das Puzzlen nach Zeit und die Gerätekunde auf Richtigkeit. Danach wurde erst einmal die Mittagspause eingeläutet. Natürlich gab es das gewohnte Essen (Nudeln und Tomatensoße) der Feuerwehr, was bei den Kids immer großen Anklang findet.</p>
            <p>Für die Betreuer gab es noch eine kleine Zusammenkunft um eventuelle Probleme zu klären. Um 13:15 Uhr ging es dann weiter mit dem Wertungslauf der Schnelligkeitsübung, wo wir Molsdorfer als erstes an den Start gingen und somit dann die meiste Zeit bis zum Ergebnis hatten. In der Zwischenzeit konnte auf der Hüpfburg getobt werden und natürlich durfte auch ein Eis bei dem warmen Wetter nicht fehlen. Leider haben wir das Halbfinale dieses Jahr wegen einer zu wenig abgeworfenen Dose nicht erreicht und die Enttäuschung war groß. Zur Siegerehrung gegen 15:00 Uhr stieg die Spannung bei den Kindern, da sie schon Angst hatten letzter zu werden, aber zur Überraschung aller sprang doch noch ein guter aber unglücklicher 5.Platz herraus.</p>
            <p>Dennoch sind wir sehr stolz auf die erbrachte Leistung unserer Mannschaft.</p>
          `)
        }
      ]
    });
  }

});
