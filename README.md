# Modyfikowalny button
Napisz komponent przycisku Button. Ale nie będzie to taki zwykły przycisk - będzie posiadał pewnie niezwykłe właściwości ;) Do stworzenia tego komponentu skorzystaj z tagu button, w taki sposób, aby można było przekazać props label, który będzie wyświetlał jego etykietkę.

Poza tym komponent powinien przyjmować props bgColor oraz color, które będą odpowiednio zmieniały kolor tła oraz kolor etykiety. Kolory powinny być zdefiniowane jako słownik w komponencie, czyli zamiast hex przekazujemy string np. red. Kolory możesz pobrać z palety kolorów: https://flatuicolors.com/

Przykładowo, jeśli skorzystam z palety https://flatuicolors.com/palette/defo, to powinienem wpisać:

`<Button label="Click me" bgColor="alizarin" color="clouds" />`
Zdefiniuj domyślne wartości dla propsów bgColor oraz color (tak, nie było tego jeszcze w materiałach ;)

## Modyfikacja 1
Jeśli nie chcesz korzystać z propsa label, to spokojnie możesz skorzystać z children, aby zapisywać komponent w taki sposób:

`<Button bgColor="alizarin" color="clouds">Click me</Button>`

## Modyfikacja 2
Rozszerz swój przycisk możliwość wyświetlania ikony przed etykietą label. Skorzystaj do tego z tej biblioteki

Przykład:

`<Button icon="user" label="Click me" />`
Spowoduje wyświtlenie ikony user przed etykietą Click me.

# 2. Input i Textarea
Przygotuj komponenty Input oraz Textarea, które podobnie jak komponent Button przyjmą propsy bgColor dla tła oraz color dla koloru wpisywanego tekstu. Dodatkowo te komponenty powinny mieć propsy, które pozwolą na zmianę obramowania: borderSize, borderRadius, borderColor.

# 3. Eksport komponentów Button, Input i Textarea
Mając przygotowane komponenty Button, Input oraz Textarea stwórz folder Form, w którym się znajdą, a następnie przygotuj plik index.js, w którym zdefiniujesz eksporty. Eksporty powinny być tak zdefiniowane, abym w każdym miejscu aplikacji mógł skorzystać z importu:

`import { Button, Input, Textarea } from 'sciezka_do_Form';`

### Modyfikacja
Spróbuj skorzystać z absolutnych importów, aby nie musieć podawać pełnej ścieżki. Przykładowo, jeśli komponenty znajdują się w folderze components/Form, to import będzie wyglądał następująco:

`import { Button, Input, Textarea } from 'components/Form';`