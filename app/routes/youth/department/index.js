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
          title: '23. Stadtjugendfeuerwehrzeltlager in Erfurt-Bischleben vom 10.06-12.06.2016',
          description: htmlSafe(`
            <p>Los ging es am Freitag mit den 10-18 jährigen um 16:30 Uhr am Gerätehaus, dort packten wir alles zusammen was man so braucht für ein Zeltlager und starteten gegen 17:00 Uhr in Richtung Bischleben. Hier angekommen packten zuerst alle mit an beim Zeltaufbau und im Anschluss gab es Bratwurst zum Abendbrot. 19:30 Uhr wurde das Zeltlager offiziell vom Stadtjugendfeuerwehrwart Martin Hellmuth eröffnet. Das Wetter war zum Glück auf unserer Seite und wir konnten beruhigt in die erste Nacht starten, denn Freitag heißt es immer " bei Zeiten ins Bett", da der Samstag recht lang ist. Am Samstag früh um 7:30 Uhr trafen sich die 6-9 jährigen um auch nach Bischleben zu starten und natürlich erst einmal zu Frühstücken um sich für den Tag zu stärken. In der Zwischenzeit war auch schon wecken bei den großen angesagt die wir dann beim Frühstück im Festzelt getroffen haben. Gegen 09:00 Uhr starteten wir unseren kleinen Fußmarsch vom Kleinen Feld in Richtung Sportplatz da vor den Wettbewerben die Anmeldung der Mannschaften erfolgen musste. Hier wartete unser Hauptwertungsrichter Henry Schwarzer aus Sonneberg auf uns, der seit treuen 15 Jahren die Auswertung der Wettbewerbe vornimmt. In diesem Jahr starteten wir leider nur mit drei Mannschaften (2 Gruppen 6-9 J. und 1 Gruppe 10-18 J.), da einige der Jugendlichen der Meinung waren nicht am Training teilzunehmen. In der Altersklasse 6-9 Jahre (Gruppenstafette, Wissenstest und Knoten) startet zuerst unsere ältere und größere Mannschaft mit Leni, Hannah, Marie, Julian und Johannes und gleich danach startete die kleinere und jüngere Mannschaft mit Frida, Mika, Alexis, Travis und Rufus und nicht zu vergessen unsere Ersatzfrau Lotta die kräftig die Daumen gedrückt hat. Diese wurden von Kinderjugendwartin Ines Schwabe und Betreuer/Kübelspritzenmann Henry Heinz betreut.</p>
            <p>Nachdem die Gruppenstafette beendet war, drückten alle "Bambinis" den 10-18 jährigen die Daumen, da diese gleich im Anschluss mit dem BWB im A-Teil starteten. Hier setzte sich die Mannschaft aus Ronja, Sophia, Max, Vivian, Jonas, Clemens, Hannah, Lucas und Michelle und dem Ersatzmann Finn zusammen. Jetzt musste der Platz so schnell wie möglich abgebaut und der Ablageplatz hergerichtet werden damit die Gruppe starten konnte, hier gab es Hilfe von Jugendwartin Kristina Schwabe und Betreuer Till Heinemann. Bevor es dann richtig los ging gab es noch mal eine kleine Motivationsspritze von Wehrführer, Trainer und Betreuer Hendrik Friebel der die ganze Zeit mit den Molsdorfern mit zitterte und natürlich als Wettbewerbsleiter alles genau im Blick hatte. Nach hartem Training im Vorfeld und viel Aufregung, zahlte sich der Stress und die vielen neuen grauen Harre der Betreuer aus, denn die Mannschaft lieferte eine souveräne Leistung ab mit der alle zufrieden sein konnten. Nach kurzer Verschnaufpause ging es mit dem B-Teil (Staffellauf) weiter, der nicht ganz optimal verlief.  Damit endeten die Wettbewerbe für uns und wir konnten den Fußmarsch zurück zum Zeltplatz antreten wo nun das wohlverdiente Mittagessen (Nudeln und Tomatensoße) auf uns wartete. Danach konnten wir etwas durch schnaufen und warteten auf die Abfahrt zur ICE Tunnelbesichtigung, die ein paar interessante Informationen für uns bereit hielt. Zurück von der Besichtigung ging es weiter im Programm mit der Wanderrally, die einen langen Marsch von 5km und viele Stationen für uns bereit hielt. Gegen 19:30 Uhr ging es zur Siegerehrung auf die alle schon sehr gespannt waren. Natürlich waren wieder zahlreiche Eltern und auch die Betreuer vertreten. Die Siegerehrung startete mit der Altersklasse 6-9 Jahre wo die 2. Mannschaft  den 6. Platz und die 1.Mannschaft den wohlverdienten und lang ersehnten 1.Platz belegten. Auch in der Altersklasse 10-18 Jahren waren wir mit dem 2.Platz wieder sehr erfolgreich hinter den ewigen "Kongruenten" aus Alach und verbesserten uns zum Vorjahr. Allerdings bleibt noch ein zu sagen, man sieht sich immer zweimal im Leben und deswegen geht es in diesem Jahr gemeinsam mit den Alachern zum Landesausscheid nach Ichtershausen am 27.08.2016.</p>
            <p>- Herzlichen Glückwunsch -</p>
            <p>Alles in allem ein sehr gelungenes Wochenende für alle Beteiligten. Ein herzlicher Dank geht in erster Linie an alle Kinder und Jugendlichen die mit großer Einsatzbereitschaft so eine Leistung erst möglich machen. Vielen Dank allen Betreuern, Helfern und Eltern für die zahlreiche Unterstützung.</p>
          `)
        },
        {
          title: '2. Platz beim Stadtausscheid in Gispersleben',
          description: htmlSafe(`
            <p>Vom 12. bis 14.06.09 fand das jährliche Zeltlager und der damit verbundene Stadtausscheid der Erfurter Jugendfuerwehren in Erfurt-Gispersleben statt. Der Killianipark war an diesem Wochenende in fester Hand der Nachwuchsbrandbekämpfer.</p>
            <p>Höhepunkt war wieder der Wettbewerb am Samstag, welche sich in zwei Alterklassen teilte. In diesem Jahr gab es eine Premiere aus Molsdorfer Sicht. Zum ersten Mal bildeten wir  in der AK 10-18 Jahre gemeinsam mit Alach ein Team. Nachdem der Löschangriff im A-Teil absolviert war, standen in der Zwischenbilanz zwei Mannschaften auf Platz eins. Mit je 984 Punkten waren die Mannschaft aus Alach und unsere gemischtes Team Molsdorf/Alach ganz vorn dabei. Der Staffellauf im B-Teil musste also für eine Entscheidung sorgen. So kam es auch, mit dem besseren Ende für das Team aus dem Erfurter Westen. Am Ende setzten sich die Alacher mit 1360,7 Punkten knapp vor unserer Mannschaft mit 1356,7 Pkt. durch. Marbach erreichte mit 1328,7 Punkten den dritten Platz.</p>
            <p>So war es ein sehr erfolgreiches Wochenende für die befreundeten Jugendfeuerwehren aus Alach und Molsdorf. Unser Dank gilt dem entsprechend den Kameraden aus Alach, welche uns auch bei den Deutschen Meisterschaften unterstützen werden.</p>
            <p>An dieser Stelle ein Lob an die Verantworlichen und alle freiwilligen Helfer für ein gelungenes Wochenende.</p>
          `)
        }
      ]
    });
  }

});
