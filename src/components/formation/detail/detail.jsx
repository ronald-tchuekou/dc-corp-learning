/*
 * Created on Mon Jan 17 2022
 *
 * @author Ronald Tchuekou <ronaldtchuekou@gmail.com>
 * Copyright (c) 2022 dc-corp
 */

import React from 'react'
import { Code, Paragraph, Title, CodeSingle } from '../..'
import { LangContext } from '../../../contexts'
import { Lang } from '../../../lang'

export const PlayCourseDetails = ({}) => {
    const { lang } = React.useContext(LangContext)
    return (
        <div className="mb-1 space-y-6">
            <div className="text-3xl lg:text-5xl text-black font-semibold">{Lang.about_this_cours[lang]}</div>
            <Paragraph>
                {"Le problème lorsque l'on cherche à apprendre un nouveau langage est que l'on se retape systématiquement" +
                    "les bases : Les variables, les fonctions, les conditions... Ce qui peut s'avérer pénible lorsque l'on" +
                    "connait déjà un autre langage de programmation. Aussi, je vous propose d'utiliser les connaissances que" +
                    "vous avez déjà en PHP afin d'accélerer votre apprentissage du JavaScript."}
            </Paragraph>
            <Title>Les variables</Title>
            <Paragraph>
                {`Les variables en JavaScript doivent être déclarées avant d'être utilisées mais il n'est pas nécessaire
                de les préfixer par un`}{' '}
                <CodeSingle>$</CodeSingle>
            </Paragraph>
            <Code code={'var a = 1\na // 1'} />
            <Paragraph>
                {`Il n'est d'ailleurs pas nécessaire de terminer nos instructions par des`} <CodeSingle>;</CodeSingle>.
            </Paragraph>
            <Paragraph>
                {`Les variables ont des types similaires à ceux que l'on connait en PHP. En revanche il n'existe pas de
                tableaux associatifs. Ils sont "remplacés" par des objets.`}
            </Paragraph>
            <Code
                code={
                    'var a = 1 // nombres \n' +
                    'var b = "chaine" // Pas de différence entre " et \'  \n' +
                    "var c = ['tab', 2, 3.14] // Les tableaux fonctionnent comme en PHP \n" +
                    '// Les objets "remplacent`" les tableaux associatifs \n' +
                    'var d = { \n' +
                    "    nom: 'Marc', \n" +
                    '    note: 18 \n' +
                    '    notes: [2, 10, 16]     \n' +
                    '} \n' +
                    'd.nom // Marc  \n' +
                    "d['nom'] // Marc \n" +
                    'var e = null // valeur nulle \n' +
                    'var f = false // booléen \n' +
                    "var g = undefined // Pas d'équivalent en PHP \n" +
                    'var h // Prendra automatiquement la valeur undefined \n'
                }
            />
            <Paragraph>
                {`Pour la concaténation le JavaScript n'utilisent pas l'opérateur `} <CodeSingle>.</CodeSingle>
                {` mais une simple addition`}
            </Paragraph>
            <Title>Les conditions</Title>
            <Paragraph>Les conditions fonctionnent comme en PHP à un détail prèt.</Paragraph>
            <Code
                code={
                    'if (<condition>) {\n' +
                    '\n' +
                    "} else if (<condition>) { // Le else if s'écrit en 2 mots\n" +
                    '\n' +
                    '} else {\n' +
                    '\n' +
                    '}\n'
                }
            />

            <Title>Les boucles</Title>
            <Paragraph>
                {`Les boucles s'écrivent de la même façon qu'en PHP avec le`} <CodeSingle>while</CodeSingle> ou le{' '}
                <CodeSingle>for</CodeSingle>
            </Paragraph>
            <Code
                code={
                    'while (<condition>) {\n' + '\n' + '}\n' + '\n' + 'for(var i = 0; i < 10; i++) {\n' + '\n' + '}\n'
                }
            />
            <Paragraph>
                {`En JavaScript il n'existe pas de boucles `}
                <CodeSingle>foreach</CodeSingle> (on verra comment contourner le problème) plus tard
            </Paragraph>

            <Title>Les fonctions</Title>
            <Paragraph>
                {`Les fonctions peuvent s'écrire comme en PHP et sont un type de variable particulier. On pourra ainsi les
                stocker dans une variable.`}
            </Paragraph>
            <Code
                code={
                    'function demo (a) {\n' +
                    '   return a * 3\n' +
                    '}\n' +
                    '\n' +
                    'var demo2 = function (a) {\n' +
                    '   return a * 3\n' +
                    '}\n' +
                    '\n' +
                    'demo(3) // 9 \n'
                }
            />
            <Paragraph>
                {`En JavaScript il n'existe pas de boucles `}
                <CodeSingle>foreach</CodeSingle> (on verra comment contourner le problème) plus tard
            </Paragraph>
        </div>
    )
}
