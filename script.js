window.onload =

    document.getElementById("Nome").focus();

let btn = document.getElementById("btn");

let suggerimenti = document.getElementById("SO");
let suggerimentiElements = document.getElementsByClassName("Subject");
let divScroll = document.getElementById("scrollDiv");
document.getElementById('Div4').style.display = 'none';

let OUTPUT = document.getElementById('IdOutput');
let Exist = false;
let i = 7;


function SubmitForm() {
    let Persona = {
        "nome": document.getElementById("Nome").value,
        "cognome": document.getElementById("Cognome").value,
        "Data di Nascita": document.getElementById("dataDiNascita").value,
        "Indirizzo": document.getElementById("indirizzo").value,
        "Citta": document.getElementById("citta").value,
        "cap": document.getElementById("cap").value,
        "email": document.getElementById("email").value,
        "telefono": document.getElementById("telef").value,
        "Competenze": document.getElementById("skillsList").value,
        "Profilo": document.getElementById("TextAreaID").value,
        "Istruzione": {
            "Istiturto": document.getElementById("Istituto").value,
            "Luogo": document.getElementById("Luogo").value,
            "Titolo": document.getElementById("Titolo").value,
            "Campo": document.getElementById("Campo").value,
            "Anno": document.getElementById("Anno").value
        },
        "Certificazioni":{

        },
        "Lingue": {


        }

    };

    let elements = document.getElementsByClassName("Lingue");
    console.log(elements);
    let LastElement = ((elements[0].id).split("_"))[0];

    console.log(LastElement);
    let countSliderID = LastElement; 

    for (let i = 0; i < elements.length; i++) {
        let input = elements[i].querySelector('#Lingua');
        let slider = elements[i].querySelector(`[id="${countSliderID}"]`);
        
        console.log(slider);
        if(slider !== null && slider.value !== undefined){
           console.log(slider.value);
           Persona.Lingue['Livello'+i] = slider.value;
        }
        
        Persona.Lingue['Lingua'+i] = input.value;
        
        countSliderID--;
    }

    let elementLi = document.getElementsByClassName("listaCert");
    let liste = elementLi[0].getElementsByTagName("li");
    console.log(elementLi);
    console.log(liste);
    for (let i = 0; i < liste.length; i++) {
       Persona.Certificazioni["Certificato"+i] = liste[i].outerText;
   }
    console.log(Persona);
    OUTPUT.style.display = 'block';

}



function Cerca() {
    let sugg = document.getElementById('Suggerimeni-input').value;
    console.log(sugg);
    if (Exist) {
        let arrDiv = Array.from(suggerimentiElements);
        console.log("array :", arrDiv);
        arrDiv[0].remove();
    }
    let profilo = '';
    switch (sugg) {
        case "Amministrazione":
            profilo = "Amministratore delegato con laurea in [Settore] presso [Ente/Scuola] e specializzazione in [Specializzazione]. Offre competenze multidisciplinari nella determinazione di una strategia aziendale di successo maturate in [Numero] anni di esperienza in contesti internazionali all'interno di società [Tipologia]. Ottime doti comunicative e di negoziazione, precisione, leadership e abilità di networking.";
            break;
        case "Archittetura":
            profilo = "Architetto con [Numero] anni di esperienza in project management e nella progettazione dei paesaggi urbani. Sa collaborare efficacemente con tutte le parti interessate per la realizzazione di strutture sostenibili e conformi alle richieste dei clienti.";
            break;
        case "Arte e Design":
            profilo = "Professionista creativo con [Numero] anni di esperienza nel campo dell'arte, del design e della progettazione grafica. Abilità consolidate nella concezione e realizzazione di prodotti e soluzioni innovative ad alto impatto visivo. Esperto nell'utilizzo di tecniche tradizionali e digitali.";
            break;

        case "Assistenza clienti":
            profilo = "Receptionist competente e professionale, esperto in supporto amministrativo e servizio ai clienti. Vanta [Numero] anni di esperienza nella gestione rapida ed efficace di operazioni di front desk. Indiscusse capacità di pianificazione, problem solving e comunicazione.";
            break;

        case "Comunicazione":
            profilo = "Professionista in ambito advertising, marketing e PR in grado di gestire con efficacia e autonomia i rapporti esterni con gli stakeholder, massimizzandone satisfaction e retention. Abile a supervisionare le relazioni con i professionisti e i creativi d'agenzia e a coordinare i rapporti con stampa e media per amplificare con successo l'immagine del brand. Dinamica e intraprendente, impegnata da oltre [Numero] anni nella definizione di strategie integrate di comunicazione con i media pertinenti per raggiungere gli obiettivi dei clienti in linea con il budget e il target da intercettare.";
            break;
        case "Consulenza":
            profilo = "[Qualifica] orientato al risultato con esperienza nell'individuazione e nell'attuazione di miglioramenti dei processi, incluso il coordinamento del flusso di lavoro amministrativo e la documentazione delle procedure. Estremamente efficace nella gestione del tempo e delle comunicazioni a tutti con tutti i livelli del personale, della direzione e della clientela.";
            break;

        case "Contabilità":
            profilo = "Impiegato amministrativo senior con solida esperienza in contabilità generale fino alla pianificazione del bilancio, capace di lavorare in modo autonomo e naturalmente dotato di un forte senso di responsabilità e determinazione.";
            break;

        case "Controllo di gestione":
            profilo = "Professionista affidabile, con esperienza pluriennale in [Settore]. Dotata di spiccate capacità interpersonali, comunicative e visione d'insieme per rispondere ai diversi bisogni aziendali. Forte motivazione e orientamento agli obiettivi, ha gestito con successo attività [Settore] per [Numero] anni.";
            break;

        case "Creatività":
            profilo = "Professionista con esperienza pluriennale nel settore [Settore] in ruoli [Tipologia]. Si distingue per l'ampio ventaglio di competenze multidisciplinari, ottime doti di comunicazione interpersonale e abilità di mentoring del personale grazie alle quali sa instaurare relazioni significative e garantire un ambiente di lavoro dinamico e produttivo. Dimostra salda leadership, versatilità e capacità di ottimizzare costantemente i processi aziendali potenziando il workflow e l'efficienza organizzativa attraverso un atteggiamento propositivo e proattivo alla risoluzione di problematiche anche complesse.";
            break;
        case "Cucina":
            profilo = "Professionista innovativo dotato di particolare talento in [Abilità] e [Abilità]. Intelligente ed energico, dà il meglio di sé nella realizzazione di piatti sani usando materia prima locale. Alla ricerca di nuove opportunità per creare menù stimolanti e contribuire così al successo di strutture di livello.";
            break;
        case "Design":
            profilo = "Designer focalizzato in task e attività tra cui [Descrizione] e [Descrizione] messe in campo in numerosi progetti di grafica multimediale per brand del calibro di [Nome] per realizzare strategie di comunicazione finalizzate a [Descrizione]. Opera con un elevato senso estetico e pratico e collabora costantemente con i creativi e i tecnici della comunicazione per trovare soluzioni coerenti agli insight di settore e al target di riferimento. Ama pianificare strategie e concept che si distinguono per il gusto visivo e la gradevolezza del visual.";
            break;
        case "Diritto":
            profilo = "Giurista con più di [Numero] anni di esperienza nell'esercizio della professione forense concentrando la propria attività nell'ambito del diritto commerciale e societario, con particolare attenzione alla contrattualistica complessa e alle procedure fallimentari.";
            break;
        case "E-commerce":
            profilo = "[Qualifica] di talento con comprovato successo nel marketing management e nello sviluppo delle campagne pubblicitarie. Instancabile nella supervisione di tutte le fasi delle attività, nella costruzione di relazioni positive e nella promozione di prodotti con approcci innovativi e lungimiranti. Ben capace di tracciare le tendenze del mercato e di capitalizzare importanti opportunità.";
            break;
        case "Editoria":
            profilo = "Professionista con [Numero] anni di esperienza nel campo della scrittura tecnica. Dimostra grande precisione e talento nell'adattare i testi al pubblico di riferimento nonché competenza nella creazione e implementazione di immagini specifiche utili alla comprensione.";
            break;
        case "Educazione":
            profilo = "Educatore/Insegnante con [numero] anni di esperienza nella formazione e istruzione. Dedica il proprio lavoro alla crescita e allo sviluppo dei talenti dei giovani studenti, trasmettendo passione e conoscenza.";
            break;
        case "Eventi":
            profilo = "Event manager con [numero] anni di esperienza nell'ideazione, organizzazione e gestione di eventi, conferenze e manifestazioni per aziende e professionisti. Abilità nel pianificare e coordinare tutti gli aspetti di un evento, dalla definizione degli obiettivi al budget, dalla scelta della location al programma, fino alla comunicazione e alla logistica.";
            break;
        case "Finanza":
            profilo = "Manager con oltre [Numero] anni di esperienza nel settore finanziario che vanta una comprovata esperienza nella gestione di investimenti finanziari e nell'ottimizzazione delle performance del portafoglio. Ha maturato una profonda conoscenza dei mercati e degli strumenti finanziari, con focus sul trading finanziario e sull'asset management.";
            break;
        case "Fotografia":
            profilo = "Fotografo professionista con [Numero] anni di esperienza nella fotografia creativa, pubblicitaria e documentaristica. Mi dedico con passione alla cattura della luce e dei momenti, sapendo cogliere il significato profondo degli attimi irripetibili.";
            break;
        case "Grafica":
            profilo = "Specialista in graphic e multimedia design con [Numero] anni di esperienza e ottime abilità specifiche in [Descrizione]. Ha collaborato per campagne di comunicazione in veste di [Qualifica] occupandosi di attività tra cui [Descrizione] e [Descrizione] per obiettivi di [Descrizione]. Preciso, brillante e poliedrico. Preferisce non abusare della parola creatività e si dedica ad ogni nuovo progetto con dedizione, collaborazione e inventiva sperimentando soluzioni tecniche, visive e di comunicazione con passione e profondo interesse.";
            break;
        case "Healthcare":
            profilo = "esperienza maturata in contesti clinici e organizzativi. Ha conseguito la laurea in [indica corso di laurea] e diversi diplomi di specializzazione.";
            break;
        case "Hotel e turismo":
            profilo = "Manager con [numero] anni di esperienza nel settore alberghiero e della ricezione turistica. Attualmente ricopro la posizione di [mansione] presso [nome struttura].";
            break;
        case "HR":
            profilo = "Gestisco e coordino le strategie e le politiche HR per supportare la crescita e il successo dell'azienda.Metto a disposizione oltre [numero] anni di esperienza nella gestione strategica delle risorse umane.";
            break;
        case "ICT":
            profilo = "Professionista specializzato nell'ambito delle tecnologie dell'informazione e della comunicazione, con competenze in diverse aree come lo sviluppo software, la gestione dei sistemi IT e la sicurezza informatica.";
            break;
        case "Immobiliare":
            profilo = "Professionista con esperienza nel settore immobiliare, con competenze nella compravendita, locazione e gestione di immobili, nonché nella valutazione e nella consulenza immobiliare.";
            break;
        case "Ingegneria":
            profilo = "Ingegnere con esperienza in diversi settori dell'ingegneria, come l'ingegneria civile, meccanica, elettrica o dell'automazione. Competenze nella progettazione, nell'analisi e nella gestione di progetti complessi.";
            break;
        case "Investimenti":
            profilo = "Esperto in ambito finanziario e degli investimenti, con competenze nella gestione e nell'analisi di portafogli di investimento, nell'identificazione di opportunità di investimento e nella valutazione dei rischi finanziari.";
            break;
        case "IT":
            profilo = "Professionista con competenze nell'ambito delle tecnologie dell'informazione, tra cui lo sviluppo software, la gestione dei sistemi IT, la sicurezza informatica e la gestione dei dati.";
            break;
        case "Lavori manuali":
            profilo = "Esperto in lavori manuali e artigianali, con competenze in diversi settori come la carpenteria, la falegnameria, la lavorazione dei metalli o l'artigianato artistico.";
            break;
        case "Legale":
            profilo = "Professionista con competenze nel campo del diritto, specializzato in diverse aree come il diritto civile, penale, commerciale o del lavoro. Esperienza nella consulenza legale, nella negoziazione e nella rappresentanza legale.";
            break;
        case "Logistica":
            profilo = "Professionista con competenze nella gestione e nell'ottimizzazione dei processi logistici, compresa la pianificazione, l'organizzazione e il controllo della catena di approvvigionamento e della distribuzione dei prodotti.";
            break;
        case "Management":
            profilo = "Manager con competenze nella gestione strategica delle risorse e delle attività aziendali, compresa la pianificazione, l'organizzazione, la direzione e il controllo delle funzioni aziendali per raggiungere gli obiettivi di business.";
            break;
        case "Marketing":
            profilo = "Professionista con competenze nel campo del marketing, compresa l'analisi di mercato, lo sviluppo di strategie di marketing, la gestione delle campagne pubblicitarie e la promozione dei prodotti o servizi.";
            break;
        case "Media":
            profilo = "Professionista con competenze nella produzione, nella gestione e nella diffusione dei contenuti mediatici, compresi la produzione cinematografica, televisiva o radiofonica, il giornalismo, la pubblicità o la comunicazione digitale.";
            break;
        case "Medicina":
            profilo = "Professionista nel campo della medicina, con competenze in diverse specializzazioni mediche, come la medicina generale, la chirurgia, la pediatria o la ginecologia. Esperienza clinica e conoscenza delle procedure mediche.";
            break;
        case "Moda":
            profilo = "Professionista con competenze nell'industria della moda, compresi il design, la produzione, il merchandising, il marketing e la gestione di brand nel settore della moda e dell'abbigliamento.";
            break;
        case "Musica":
            profilo = "Professionista nel campo della musica, con competenze come la composizione, l'esecuzione, la produzione o la direzione musicale. Esperienza nella creazione e nell'esecuzione di opere musicali.";
            break;
        case "Non-profit":
            profilo = "Professionista con esperienza nel settore non-profit, compresa la gestione di organizzazioni senza scopo di lucro, la raccolta fondi, la pianificazione degli eventi e la promozione delle cause sociali o ambientali.";
            break;
        case "Pubblicità":
            profilo = "Professionista con competenze nella creazione e nella gestione di campagne pubblicitarie, compresa l'ideazione di concetti creativi, la pianificazione strategica e l'esecuzione delle campagne pubblicitarie su diversi canali di comunicazione.";
            break;
        case "Qualità":
            profilo = "Esperto in gestione della qualità, con competenze nella definizione di standard di qualità, nella valutazione dei processi, nel monitoraggio delle performance e nell'implementazione di sistemi di gestione della qualità.";
            break;
        case "Ricerca e sviluppo":
            profilo = "Professionista con competenze nella ricerca scientifica e nello sviluppo di nuovi prodotti, servizi o tecnologie. Esperienza nella progettazione e nell'esecuzione di studi di ricerca e nella collaborazione con team multidisciplinari.";
            break;
        case "Sicurezza":
            profilo = "Esperto in sicurezza, con competenze nella valutazione dei rischi, nella progettazione e nell'implementazione di sistemi di sicurezza, nella gestione delle emergenze e nella formazione del personale sulla sicurezza.";
            break;
        case "Sport":
            profilo = "Professionista nel campo dello sport, con competenze come l'allenamento, la preparazione atletica, la gestione degli eventi sportivi o l'organizzazione delle attività sportive.";
            break;
        case "Startup":
            profilo = "Esperto nel campo delle startup, con competenze nella creazione, nello sviluppo e nella gestione di nuove imprese, compresa l'ideazione del modello di business, la raccolta fondi, la pianificazione strategica e l'implementazione delle operazioni.";
            break;
        case "Sviluppo software":
            profilo = "Professionista con competenze nello sviluppo di software, compresa la progettazione, la programmazione, il testing e l'implementazione di applicazioni software o soluzioni informatiche.";
            break;
        case "Tecnologia":
            profilo = "Esperto in tecnologia, con competenze in diverse aree come l'informatica, le reti, la sicurezza informatica o l'intelligenza artificiale. Conoscenza delle ultime tendenze tecnologiche e capacità di applicarle in contesti specifici.";
            break;
        case "Turismo":
            profilo = "Professionista con competenze nel settore turistico, compresa la gestione di strutture turistiche, la pianificazione e l'organizzazione di viaggi e tour, la promozione delle destinazioni turistiche e la gestione delle esperienze turistiche.";
            break;
        case "Vendite":
            profilo = "Professionista con competenze nella vendita e nel marketing, compresa la gestione delle relazioni con i clienti, la negoziazione, la pianificazione delle strategie di vendita e il raggiungimento degli obiettivi di vendita.";
            break;
        case "Web development":
            profilo = "Professionista con competenze nello sviluppo di siti web e applicazioni web, compresa la progettazione e lo sviluppo di interfacce utente, la programmazione di backend, l'integrazione di database e la gestione delle operazioni di deployment.";
            break;
        case "Alimentare":
            profilo = "Esperto nel settore alimentare, con competenze nella produzione, nella lavorazione, nella qualità e nella sicurezza degli alimenti. Conoscenza delle normative alimentari e capacità di gestire le operazioni legate alla filiera alimentare.";
            break;
        case "Animazione":
            profilo = "Professionista nel campo dell'animazione, con competenze nella creazione di animazioni digitali, grafica in movimento, storytelling visivo e produzione di contenuti animati per diverse piattaforme e media.";
            break;
        case "Artigianato":
            profilo = "Esperto nel settore dell'artigianato, con competenze nella lavorazione manuale di materiali come legno, tessuti, ceramica o metalli. Capacità di creare prodotti unici e di alta qualità attraverso tecniche artigianali tradizionali.";
            break;
        case "Assistenza sanitaria":
            profilo = "Professionista con competenze nel settore dell'assistenza sanitaria, compresa l'assistenza diretta ai pazienti, la gestione delle cure, la coordinazione delle risorse mediche e l'amministrazione delle strutture sanitarie.";
            break;
        case "Automotive":
            profilo = "Esperto nel settore automobilistico, con competenze nella progettazione, nello sviluppo e nella produzione di veicoli, nonché nella gestione delle operazioni legate all'industria automobilistica e alla manutenzione dei veicoli.";
            break;
        case "Bellezza":
            profilo = "Professionista nel settore della bellezza, con competenze nella cura del corpo, nell'estetica, nel trucco, nel parrucchiere o nella gestione di saloni di bellezza. Capacità di fornire servizi di bellezza personalizzati e di tendenza.";
            break;
        case "Beni culturali":
            profilo = "Esperto nel campo dei beni culturali, con competenze nella conservazione, nella valorizzazione e nella gestione di opere d'arte, monumenti, siti archeologici o patrimoni culturali. Conoscenza delle normative e delle migliori pratiche nella tutela dei beni culturali.";
            break;
        case "Big data":
            profilo = "Professionista con competenze nell'analisi dei dati su larga scala, compresa la raccolta, l'elaborazione, l'interpretazione e la visualizzazione dei dati per estrarre informazioni e supportare le decisioni aziendali.";
            break;
        case "Biologia":
            profilo = "Esperto nel campo della biologia, con competenze nella ricerca, nell'analisi e nella comprensione dei sistemi biologici, compresi gli organismi viventi, le cellule, i geni e le interazioni biologiche.";
            break;
        case "Chimica":
            profilo = "Professionista nel campo della chimica, con competenze nella ricerca, nella sintesi, nell'analisi e nell'applicazione di composti chimici. Capacità di lavorare in laboratorio e di sviluppare soluzioni chimiche per diverse applicazioni.";
            break;
        case "Cinema":
            profilo = "Esperto nel campo del cinema, con competenze nella produzione cinematografica, nella regia, nella sceneggiatura, nella cinematografia, nel montaggio o nella gestione delle operazioni di produzione e distribuzione cinematografica.";
            break;
        case "Commercio":
            profilo = "Professionista con competenze nel settore commerciale, compresa la gestione delle vendite, la negoziazione, lo sviluppo di strategie di marketing, la gestione delle relazioni con i clienti e la pianificazione delle attività commerciali.";
            break;
        case "Condizioni di lavoro":
            profilo = "Esperto nel campo delle condizioni di lavoro e delle relazioni industriali, con competenze nella gestione delle risorse umane, nella legislazione del lavoro, nella contrattazione collettiva e nella promozione di condizioni di lavoro eque e sicure.";
            break;

        case "Crescita personale":
            profilo = "";
            break;
        case "Criminalità informatica":
            profilo = "Esperto di sicurezza informatica e cybersecurity con più di [numero] anni di esperienza nella prevenzione, indagine e contrasto della criminalità perpetrata su internet e sulle reti IT.";
            break;
        default:
            profilo = "SETTORE NON DISPONIBILE ! IN ARRIVO NELLA PROSSIMA VERISIONE";
            break;
    }
    let newDiv = `<div class="Subject"> <button class="btn-add" id="` + i + 'i' + `" onclick = "ADD('` + i + `')"></button> <textarea class="TXTAREA" id="` + i + `" cols="30" rows="5" readonly>` + profilo + `</textarea> </div >`;
    if (suggerimenti) {
        suggerimenti.insertAdjacentHTML("afterbegin", newDiv);
    }
    suggerimenti.scrollTop = 0;
    i++;
    Exist = true;
}


function ADD(ID) {
    let Allbtn = document.getElementsByClassName("btn-add");
    let ArrBtn = Array.from(Allbtn);
    let idOriginal = ID + "i";
    let btn_testo = document.getElementById(idOriginal);
    let testo = document.getElementById(ID).value;
    document.getElementById('TextAreaID').value = testo;
    divScroll.scrollTop = 0;
    let OtherBtn = ArrBtn.filter(function (button) {
        return button !== btn_testo;
    }, btn_testo);
    for (let i = 0; i < OtherBtn.length; i++) {
        OtherBtn[i].style.backgroundColor = 'rgb(109, 32, 219)';
        OtherBtn[i].style.backgroundImage = "url('plus.png')";
    }
    btn_testo.style.backgroundColor = '#D0F21EFF';
    btn_testo.style.backgroundImage = "url('check.png')";
}

function View(ID) {
    let slider = document.getElementById(ID);
    let p = document.getElementById(ID + '_a');
    function Return() {
        let value = slider.value;

        switch (value) {
            case "1":
                return "A1 (Livello elementare)";
            case "2":
                return "A2 (Livello intermedio)";
            case "3":
                return "B1 (Livello soglia)";
            case "4":
                return "B2 (Livello avanzato)";
            case "5":
                return "C1 (Livello autonomo)";
            case "6":
                return "C2 (Livello padrone)";
            default:
                return "";
        }
    };
    p.style.border = "2px solid #d0ff00";
    p.innerHTML = Return();

}
let Top = true;

function HideDiv(ID) {

    let DivisionID = ID.split('_');
    let ID_Div_Down = DivisionID[0] + "_b";

    let ID_btn = DivisionID[0] + "_btn";

    if (Top) {
        document.getElementById(ID_Div_Down).style.display = 'none';
        document.getElementById(ID).style.height = '130px';
        document.getElementById(ID_btn).style.backgroundImage = "url('down.png')";
        Top = false;
    } else {
        document.getElementById(ID_Div_Down).style.display = 'block';
        document.getElementById(ID).style.height = 'auto';
        document.getElementById(ID_btn).style.backgroundImage = "url('top.png')";
        Top = true;
    }
}

let countDiv_Lingue = 70;


function AddLingua() {

    countDiv_Lingue++;

    let idDiv = countDiv_Lingue + "_div";


    let divContainer = document.getElementById('ContainerLingue');
    let code = "<div class='Lingue' id='" + countDiv_Lingue + "_div" + "'><div class='FormDATI' style='gap: 10px; position: relative;'><div style='display: flex; flex-direction: row; gap: 170px;'><label for='Lingua' class='labelDATI'>LINGUA</label><button class='btn-show' id='" + countDiv_Lingue + "_btn" + "' onclick=" + "HideDiv('" + idDiv + "')" + "></button></div><br><input type='text' id='Lingua' placeholder='Italiano' class='textfield' required><br><div id='" + countDiv_Lingue + "_b" + "'><label for='" + countDiv_Lingue + "' class='labelDATI'>LIVELLO</label><div style='display: flex; flex-direction: row; gap: 100px;'><input type='range' id='" + countDiv_Lingue + "' min='1' max='6' size='1' step='1' value='1' class='slider' id='myRange' onchange=" + "View('" + countDiv_Lingue + "')" + "><span id='" + countDiv_Lingue + "_a" + "'></span><button class='btn-fatto' onclick=" + "HideDiv('" + idDiv + "')" + ">Fatto</button></div></div></div></div>";


    divContainer.insertAdjacentHTML('afterbegin', code);
    divContainer.scrollTop = 0;

}

function AGGIUNGI(id) {
    console.log(id);
    console.log("ci sono");
    let idOr = id.split(',');
    let ulID = idOr[0];
    let inputID = idOr[1];
    console.log(ulID);

    let select = document.getElementById(inputID);
    let ul = document.getElementById(ulID);
    var selezione = select.value;
    var li = document.createElement("li");
    var text = document.createTextNode(selezione);
    li.appendChild(text);
    ul.appendChild(li);
    li.style.color = "black";
}


let mydiv = document.getElementsByClassName("DC");
let mydiv2 = document.getElementsByClassName("DatiContainer");


function Colorazione(ind) {
    let otherDiv = Array.from(mydiv).filter(function (div) {
        return div !== mydiv[ind];
    }, mydiv[ind]);

    for (let i = 0; i < mydiv.length; i++) {

        let divPosition = mydiv[i].querySelector(".position");
        divPosition.style.backgroundColor = "#D0F21EFF";
        divPosition.style.backgroundImage = "";
        divPosition.innerHTML = ind + 1;
        divPosition.style.color = "black";
        divPosition.style.opacity = "1";
        let divDATI = mydiv[i].querySelector(".DatiContatti");
        divDATI.style.color = "#D0F21EFF";
        divDATI.style.opacity = "1";
    }

    for (let j = 0; j < otherDiv.length; j++) {

        otherDiv[j].style.color = "rgb(68, 68, 68)";
        let innerDiv = otherDiv[j].querySelector(".position");
        let text = otherDiv[j].querySelector(".DatiContatti");
        text.style.color = "rgb(175, 175, 175)";
        innerDiv.style.backgroundColor = "rgb(175, 175, 175)";
        innerDiv.style.color = "rgb(175, 175, 175)";
        text.style.opacity = "0.5";
        innerDiv.style.opacity = "0.5";
    }


    let countVerified = ind - 1;

    while (countVerified >= 0) {
        let inner = otherDiv[countVerified].querySelector(".position");
        let testo = otherDiv[countVerified].querySelector(".DatiContatti");


        testo.style.color = "#d0ff00";
        inner.innerHTML = "";
        inner.style.backgroundImage = "url(pass.png)";
        inner.style.backgroundColor = "rgb(109, 32, 219)";
        inner.style.opacity = "1";
        countVerified = countVerified - 1;

    }

}




let div1 = document.getElementById("Div1");
let div2 = document.getElementById("Div2");
let body = document.body;



function ShowDiv(div) {

    let altriDiv = Array.from(mydiv2);

    let thisdiv = document.getElementById(div);

    let index = altriDiv.indexOf(thisdiv);

    for (let i = 0; i < altriDiv.length; i++) {

        altriDiv[i].style.display = 'none';

    }

    thisdiv.style.display = 'block';

    Colorazione(index);

    animateGradient((index + 1) * 20);

}


function animateGradient(degree) {
    var angle = degree;
    var interval = setInterval(function () {
        angle++;
        body.style.background = `linear-gradient(${angle}deg, rgba(109,32,219,1) 57%, rgba(206,233,75,1) 100%)`;

        if (angle == (degree + 20)) {
            clearInterval(interval);
        }
    }, 35);
}

function animateDEGradient(degree) {
    var angle = degree;
    var interval = setInterval(function () {
        angle--;
        body.style.background = `linear-gradient(${angle}deg, rgba(109,32,219,1) 57%, rgba(206,233,75,1) 100%)`;

        if (angle == (degree - 20)) {
            clearInterval(interval);
        }
    }, 30);
}

function ShowAlert() {
    let alertDiv = document.getElementById("AlertDiv");
    let overlayDiv = document.getElementById("overlay");
    alertDiv.style.visibility = 'visible';
    alertDiv.classList.toggle("show");
    overlayDiv.style.display = 'block';
    overlayDiv.style.opacity = 1;

}

function Conferma() {
    window.location.href = 'PageLogin.html';
}

function Annulla() {
    let alertDiv = document.getElementById("AlertDiv");
    alertDiv.style.visibility = 'hidden';
    alertDiv.classList.toggle("show");
    let overlayDiv = document.getElementById("overlay");
    overlayDiv.style.opacity = 0;
}