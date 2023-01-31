import Card from '@/components/Card'

const Interactivity = () => {
  return (
    <div>
      <Card title="interactivity" className="text-3xl" isBack={true} />
      <div id="topDiv"></div>
      <Card title="scroll smooth to bottom">
        <a
          className="rounded bg-blue-500 p-2 text-white shadow-lg hover:bg-gray-400"
          href="#bottomDiv"
        >
          Scroll To Bottom
        </a>
      </Card>
      <Card title="hover state styling">
        <button className="m-3 rounded-lg bg-black px-5 py-3 text-white hover:bg-orange-500 hover:text-black">
          Submit
        </button>
        <button className="m-3 rounded-lg bg-black px-5 py-3 text-white focus:bg-green-500">
          Submit
        </button>
        <button className="m-3 rounded-lg bg-black px-5 py-3 text-white active:bg-yellow-500">
          Submit
        </button>
      </Card>
      <Card title="styling based on parent state">
        {/* <!-- Styling based on parent state --> */}
        {/* <!-- When you need to style an element based on the state of some parent element, mark the parent with the group class, and use group-* modifiers like group-hover to style the target element: --> */}
        <a
          href="#"
          className="group block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg hover:bg-sky-500"
        >
          <div className="flex items-center">
            <h3 className="group-hover:text-white">Card Title</h3>
          </div>
          <p className="group-hover:text-white">This is some card text</p>
        </a>
      </Card>
      <Card title="pseudo classes">
        <ul className="max-w-sm">
          <li className="my-1 rounded p-2 odd:bg-blue-200 even:bg-green-200">
            item 1
          </li>
          <li className="my-1 rounded p-2 odd:bg-blue-200 even:bg-green-200">
            item 2
          </li>
          <li className="my-1 rounded p-2 odd:bg-blue-200 even:bg-green-200">
            item 3
          </li>
          <li className="my-1 rounded p-2 odd:bg-blue-200 even:bg-green-200">
            item 4
          </li>
          <li className="my-1 rounded p-2 odd:bg-blue-200 even:bg-green-200">
            item 5
          </li>
          <li className="my-1 rounded p-2 odd:bg-blue-200 even:bg-green-200">
            item 6
          </li>
          <li className="my-1 rounded p-2 odd:bg-blue-200 even:bg-green-200">
            item 7
          </li>
          <li className="my-1 rounded p-2 odd:bg-blue-200 even:bg-green-200">
            item 8
          </li>
          <li className="my-1 rounded p-2 odd:bg-blue-200 even:bg-green-200">
            item 9
          </li>
          <li className="my-1 rounded p-2 odd:bg-blue-200 even:bg-green-200">
            item 10
          </li>
        </ul>
      </Card>
      <Card title="apperance" className="flex gap-x-10">
        {/* <!-- Appearance -->
            <!-- Use appearance-none to reset any browser specific styling on an element. This utility is often used when creating custom form components. -->
         */}
        <select>
          <option>Yes</option>
          <option>No</option>
        </select>

        <select className="appearance-none">
          <option>Yes</option>
          <option>No</option>
        </select>
      </Card>
      <Card title="cursor">
        <button
          type="button"
          className="m-3 cursor-pointer rounded-lg bg-blue-500 px-5 py-3 text-white"
        >
          Submit
        </button>
        <button
          type="button"
          className="m-3 cursor-progress rounded-lg bg-blue-500 px-5 py-3 text-yellow-600"
        >
          Loading...
        </button>
        <button
          type="button"
          disabled
          className="m-3 cursor-not-allowed rounded-lg bg-blue-500 px-5 py-3 text-red-500"
        >
          Confirm
        </button>
      </Card>
      <Card title="resize">
        <textarea className="resize rounded border border-blue-500" />
      </Card>
      <Card title="user select" className="flex flex-col gap-2">
        <div className="w-1/4 select-none p-2 shadow-lg">
          select-none ...lorem ipsum dolor sit amet.
        </div>
        <div className="w-1/4 select-text p-2 shadow-lg">
          select-text ...lorem ipsum dolor sit amet.
        </div>
        <div className="w-1/4 select-all p-2 shadow-lg">
          select-all ...lorem ipsum dolor sit amet.
        </div>
        <div className="w-1/4 select-auto p-2 shadow-lg">
          select-auto ...lorem ipsum dolor sit amet.
        </div>
      </Card>
      <Card title="scroll item">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          adipisci mollitia odio aspernatur, expedita repellendus nisi aut,
          dolorem corporis ipsam dolor sed ducimus atque tenetur officiis saepe
          in quaerat enim doloremque alias iure! Nemo, quos veniam accusamus
          quae quisquam tempora fugit. Debitis repellendus totam ex? Et
          voluptatum sunt maxime cupiditate! Vero earum perferendis esse
          temporibus amet nesciunt distinctio aliquid voluptates sequi? Hic iste
          tempora accusamus, architecto animi reiciendis fugit rerum dolorum
          quisquam pariatur sint nam eligendi placeat magni harum non nihil quas
          voluptatibus. Exercitationem quae natus perspiciatis vitae, dolorum
          modi libero commodi quam voluptatibus minus eaque, numquam dolor
          itaque, fuga tempora nobis! Similique aut consequatur vitae, inventore
          repellendus ad possimus natus distinctio ratione nam consequuntur unde
          id ipsum, maxime eius dicta odit? Repellendus accusantium dolorem
          facilis distinctio quos? Cupiditate sed totam harum? Quaerat autem
          assumenda optio, doloremque aperiam molestias ullam eveniet, quod
          temporibus rerum eligendi iste distinctio fuga, praesentium asperiores
          consequuntur debitis hic! Corrupti sapiente ipsum quas libero! Error
          voluptates ad molestias dolorem doloremque omnis quasi asperiores
          delectus voluptatem ullam? Adipisci sequi natus distinctio, totam enim
          doloribus cupiditate eum delectus inventore obcaecati aspernatur quod
          itaque dolor. Nesciunt, soluta voluptatem optio suscipit consectetur
          ipsam enim voluptate corrupti quaerat. Quis minima itaque doloribus
          quod eveniet reprehenderit error facilis. Facere quos, eos reiciendis
          quae, perspiciatis in fugiat dolore recusandae laudantium, aliquid
          atque consequuntur? Laborum quo, perspiciatis odit excepturi ratione
          in quam iste consequuntur facere, sunt voluptas corrupti hic dolorum
          debitis! Voluptates aut rem fuga beatae explicabo velit maiores
          accusamus accusantium consequatur? Eveniet, blanditiis quam autem ea
          numquam accusamus. Odit quidem explicabo, maxime vero molestiae facere
          incidunt omnis. A id, voluptatem distinctio dolor veniam pariatur
          maxime eaque minima commodi nostrum! Nulla nisi voluptas rerum ducimus
          officia voluptatum repellat veniam velit non error mollitia facere
          tenetur, sequi ut illo totam eius omnis quam quisquam sit quia sunt
          ea? Molestias nobis rem molestiae odit veritatis illum, quidem nihil!
          Officiis eaque autem veniam magni magnam quisquam tempora quo quod
          culpa odit, velit error aliquid dolores aliquam et, ad nostrum neque
          exercitationem voluptate delectus, ipsa explicabo! Dignissimos
          explicabo consectetur voluptates necessitatibus tenetur vel unde
          fugiat laboriosam eum? Voluptates quisquam sequi amet minus nostrum
          assumenda. Omnis quos maxime, ipsam rerum tempora unde cupiditate
          deserunt veniam asperiores, saepe illum eveniet! Distinctio inventore
          quae officia aliquam tempora accusantium modi! Officiis facere
          deleniti corrupti doloremque nam asperiores excepturi sint voluptates.
          Officia ut autem ipsam? Ipsum fugit ea voluptates sed, officia
          expedita vel saepe assumenda ipsam minus tempore numquam aliquid
          impedit reprehenderit similique commodi illum perferendis ipsa
          reiciendis cumque. Ipsam explicabo assumenda consectetur, adipisci
          perspiciatis obcaecati non provident iusto praesentium debitis?
          Eligendi cum natus hic optio corporis, distinctio aliquid iusto
          ratione iste neque sint totam magni eveniet adipisci quibusdam, atque
          aspernatur rem? Itaque inventore expedita aut nemo aperiam delectus
          quisquam rem tenetur mollitia doloremque dolores ad neque molestiae
          necessitatibus sit, dignissimos ipsam at. Voluptas quis exercitationem
          nam non, voluptatem eos nulla iure consequatur, esse ut ipsa ab
          necessitatibus expedita, tempore odio voluptate deserunt ea corrupti
          nemo est consequuntur magni quaerat recusandae ipsam! Porro aperiam
          totam possimus, eius, libero iusto, quo ex quisquam voluptatum
          expedita voluptate error. Et facere cum ratione? Consequuntur aut
          recusandae et quod maxime deleniti autem at rem ex inventore saepe
          doloremque consequatur ratione, iusto amet fugiat repellendus
          praesentium nostrum. Repudiandae optio temporibus laboriosam autem.
          Magni, ab, neque sunt itaque quam eos accusantium exercitationem
          dolorum blanditiis dignissimos iure! Autem perspiciatis ad quidem rem
          deserunt numquam consequatur omnis in, eligendi aperiam magni odio
          modi sequi, laborum eos cupiditate velit beatae deleniti dolor cum
          recusandae ipsam voluptas quam asperiores. Dolorum officiis iste
          maiores quae, iusto laboriosam quis neque nemo atque perspiciatis
          explicabo quasi distinctio odio at eos corrupti aliquid fuga omnis
          voluptatibus quidem, reprehenderit consequatur ex culpa ab. Repellat,
          odit ipsum. Eos, fugit, magnam ea, itaque ipsum doloremque facere
          harum pariatur architecto quas fuga esse quos autem sunt dolorem?
          Minima vitae enim et quia quaerat ad esse inventore. Cumque earum
          laboriosam officiis, assumenda totam culpa incidunt. Qui ex molestiae
          voluptates eius recusandae praesentium magnam esse dicta. Accusamus
          enim rerum tempore odit, quasi placeat! Voluptas consequatur dicta
          dolor veniam dignissimos modi molestiae quos labore tempora
          architecto! Veniam animi nostrum aliquam cum at dolorum eveniet
          tempore explicabo eligendi, modi enim quia earum quasi officiis. Quas,
          exercitationem laudantium fugit perferendis at veritatis sapiente
          itaque praesentium ullam ea voluptates numquam, quam velit officia
          sunt vel quia pariatur asperiores porro est explicabo? Libero deleniti
          nisi inventore. Quisquam aut saepe fugiat illum eius laboriosam magni
          illo blanditiis vitae explicabo quia quas sapiente quis beatae, iste
          vero quaerat perferendis atque nobis unde! Recusandae nihil aut
          officiis amet quos ducimus quo, porro unde exercitationem perspiciatis
          blanditiis dicta magni nemo illum voluptatibus placeat laboriosam, cum
          alias distinctio! Voluptatibus eaque recusandae ad modi voluptate odio
          praesentium eum rem quae quia. Repellendus voluptatum illum,
          asperiores debitis saepe ipsa dolorum? Non obcaecati ut qui quos
          voluptatum ducimus saepe. Velit dolor est dolores iure architecto
          alias explicabo quae, veniam incidunt eos, quod quidem recusandae
          saepe placeat enim! Maxime provident quos, reprehenderit aut molestias
          nemo nam nesciunt atque error in sapiente, necessitatibus quo
          inventore vitae, esse corrupti minus. Laboriosam non deleniti
          doloremque ullam veritatis quod reprehenderit veniam, ipsum unde, ea
          molestias beatae exercitationem aut incidunt. Sed consequuntur
          molestiae iste tempora voluptate veritatis tenetur cumque voluptates
          iure eum labore at, vitae magni delectus maiores eaque quasi
          voluptatibus praesentium perspiciatis amet minus illum. Corporis
          pariatur, voluptas illum cumque maxime consequuntur vero dolor
          veritatis dicta. Sed sunt laudantium aperiam error quidem obcaecati,
          quaerat totam repellendus ipsam voluptas aspernatur veniam, expedita
          deleniti repellat ea perferendis at doloribus commodi dolores dicta,
          sequi quos cupiditate? Fugit quibusdam neque pariatur! Nostrum vel
          deleniti est dolor sapiente reiciendis quo inventore unde consequatur
          esse non consectetur, facere ea laboriosam ex modi illo accusamus
          repellat labore sint ullam harum eligendi. Asperiores, porro eaque eum
          assumenda ratione culpa esse ab cupiditate dolores! Dolorem explicabo
          ea minima numquam cum et veniam quos accusamus quod laudantium animi,
          doloremque a cumque exercitationem, quis maiores facere! At odio amet
          saepe esse cupiditate. Veritatis, sequi! Ipsa sunt saepe eaque
          suscipit nisi voluptatem. Et.
        </p>

        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          adipisci mollitia odio aspernatur, expedita repellendus nisi aut,
          dolorem corporis ipsam dolor sed ducimus atque tenetur officiis saepe
          in quaerat enim doloremque alias iure! Nemo, quos veniam accusamus
          quae quisquam tempora fugit. Debitis repellendus totam ex? Et
          voluptatum sunt maxime cupiditate! Vero earum perferendis esse
          temporibus amet nesciunt distinctio aliquid voluptates sequi? Hic iste
          tempora accusamus, architecto animi reiciendis fugit rerum dolorum
          quisquam pariatur sint nam eligendi placeat magni harum non nihil quas
          voluptatibus. Exercitationem quae natus perspiciatis vitae, dolorum
          modi libero commodi quam voluptatibus minus eaque, numquam dolor
          itaque, fuga tempora nobis! Similique aut consequatur vitae, inventore
          repellendus ad possimus natus distinctio ratione nam consequuntur unde
          id ipsum, maxime eius dicta odit? Repellendus accusantium dolorem
          facilis distinctio quos? Cupiditate sed totam harum? Quaerat autem
          assumenda optio, doloremque aperiam molestias ullam eveniet, quod
          temporibus rerum eligendi iste distinctio fuga, praesentium asperiores
          consequuntur debitis hic! Corrupti sapiente ipsum quas libero! Error
          voluptates ad molestias dolorem doloremque omnis quasi asperiores
          delectus voluptatem ullam? Adipisci sequi natus distinctio, totam enim
          doloribus cupiditate eum delectus inventore obcaecati aspernatur quod
          itaque dolor. Nesciunt, soluta voluptatem optio suscipit consectetur
          ipsam enim voluptate corrupti quaerat. Quis minima itaque doloribus
          quod eveniet reprehenderit error facilis. Facere quos, eos reiciendis
          quae, perspiciatis in fugiat dolore recusandae laudantium, aliquid
          atque consequuntur? Laborum quo, perspiciatis odit excepturi ratione
          in quam iste consequuntur facere, sunt voluptas corrupti hic dolorum
          debitis! Voluptates aut rem fuga beatae explicabo velit maiores
          accusamus accusantium consequatur? Eveniet, blanditiis quam autem ea
          numquam accusamus. Odit quidem explicabo, maxime vero molestiae facere
          incidunt omnis. A id, voluptatem distinctio dolor veniam pariatur
          maxime eaque minima commodi nostrum! Nulla nisi voluptas rerum ducimus
          officia voluptatum repellat veniam velit non error mollitia facere
          tenetur, sequi ut illo totam eius omnis quam quisquam sit quia sunt
          ea? Molestias nobis rem molestiae odit veritatis illum, quidem nihil!
          Officiis eaque autem veniam magni magnam quisquam tempora quo quod
          culpa odit, velit error aliquid dolores aliquam et, ad nostrum neque
          exercitationem voluptate delectus, ipsa explicabo! Dignissimos
          explicabo consectetur voluptates necessitatibus tenetur vel unde
          fugiat laboriosam eum? Voluptates quisquam sequi amet minus nostrum
          assumenda. Omnis quos maxime, ipsam rerum tempora unde cupiditate
          deserunt veniam asperiores, saepe illum eveniet! Distinctio inventore
          quae officia aliquam tempora accusantium modi! Officiis facere
          deleniti corrupti doloremque nam asperiores excepturi sint voluptates.
          Officia ut autem ipsam? Ipsum fugit ea voluptates sed, officia
          expedita vel saepe assumenda ipsam minus tempore numquam aliquid
          impedit reprehenderit similique commodi illum perferendis ipsa
          reiciendis cumque. Ipsam explicabo assumenda consectetur, adipisci
          perspiciatis obcaecati non provident iusto praesentium debitis?
          Eligendi cum natus hic optio corporis, distinctio aliquid iusto
          ratione iste neque sint totam magni eveniet adipisci quibusdam, atque
          aspernatur rem? Itaque inventore expedita aut nemo aperiam delectus
          quisquam rem tenetur mollitia doloremque dolores ad neque molestiae
          necessitatibus sit, dignissimos ipsam at. Voluptas quis exercitationem
          nam non, voluptatem eos nulla iure consequatur, esse ut ipsa ab
          necessitatibus expedita, tempore odio voluptate deserunt ea corrupti
          nemo est consequuntur magni quaerat recusandae ipsam! Porro aperiam
          totam possimus, eius, libero iusto, quo ex quisquam voluptatum
          expedita voluptate error. Et facere cum ratione? Consequuntur aut
          recusandae et quod maxime deleniti autem at rem ex inventore saepe
          doloremque consequatur ratione, iusto amet fugiat repellendus
          praesentium nostrum. Repudiandae optio temporibus laboriosam autem.
          Magni, ab, neque sunt itaque quam eos accusantium exercitationem
          dolorum blanditiis dignissimos iure! Autem perspiciatis ad quidem rem
          deserunt numquam consequatur omnis in, eligendi aperiam magni odio
          modi sequi, laborum eos cupiditate velit beatae deleniti dolor cum
          recusandae ipsam voluptas quam asperiores. Dolorum officiis iste
          maiores quae, iusto laboriosam quis neque nemo atque perspiciatis
          explicabo quasi distinctio odio at eos corrupti aliquid fuga omnis
          voluptatibus quidem, reprehenderit consequatur ex culpa ab. Repellat,
          odit ipsum. Eos, fugit, magnam ea, itaque ipsum doloremque facere
          harum pariatur architecto quas fuga esse quos autem sunt dolorem?
          Minima vitae enim et quia quaerat ad esse inventore. Cumque earum
          laboriosam officiis, assumenda totam culpa incidunt. Qui ex molestiae
          voluptates eius recusandae praesentium magnam esse dicta. Accusamus
          enim rerum tempore odit, quasi placeat! Voluptas consequatur dicta
          dolor veniam dignissimos modi molestiae quos labore tempora
          architecto! Veniam animi nostrum aliquam cum at dolorum eveniet
          tempore explicabo eligendi, modi enim quia earum quasi officiis. Quas,
          exercitationem laudantium fugit perferendis at veritatis sapiente
          itaque praesentium ullam ea voluptates numquam, quam velit officia
          sunt vel quia pariatur asperiores porro est explicabo? Libero deleniti
          nisi inventore. Quisquam aut saepe fugiat illum eius laboriosam magni
          illo blanditiis vitae explicabo quia quas sapiente quis beatae, iste
          vero quaerat perferendis atque nobis unde! Recusandae nihil aut
          officiis amet quos ducimus quo, porro unde exercitationem perspiciatis
          blanditiis dicta magni nemo illum voluptatibus placeat laboriosam, cum
          alias distinctio! Voluptatibus eaque recusandae ad modi voluptate odio
          praesentium eum rem quae quia. Repellendus voluptatum illum,
          asperiores debitis saepe ipsa dolorum? Non obcaecati ut qui quos
          voluptatum ducimus saepe. Velit dolor est dolores iure architecto
          alias explicabo quae, veniam incidunt eos, quod quidem recusandae
          saepe placeat enim! Maxime provident quos, reprehenderit aut molestias
          nemo nam nesciunt atque error in sapiente, necessitatibus quo
          inventore vitae, esse corrupti minus. Laboriosam non deleniti
          doloremque ullam veritatis quod reprehenderit veniam, ipsum unde, ea
          molestias beatae exercitationem aut incidunt. Sed consequuntur
          molestiae iste tempora voluptate veritatis tenetur cumque voluptates
          iure eum labore at, vitae magni delectus maiores eaque quasi
          voluptatibus praesentium perspiciatis amet minus illum. Corporis
          pariatur, voluptas illum cumque maxime consequuntur vero dolor
          veritatis dicta. Sed sunt laudantium aperiam error quidem obcaecati,
          quaerat totam repellendus ipsam voluptas aspernatur veniam, expedita
          deleniti repellat ea perferendis at doloribus commodi dolores dicta,
          sequi quos cupiditate? Fugit quibusdam neque pariatur! Nostrum vel
          deleniti est dolor sapiente reiciendis quo inventore unde consequatur
          esse non consectetur, facere ea laboriosam ex modi illo accusamus
          repellat labore sint ullam harum eligendi. Asperiores, porro eaque eum
          assumenda ratione culpa esse ab cupiditate dolores! Dolorem explicabo
          ea minima numquam cum et veniam quos accusamus quod laudantium animi,
          doloremque a cumque exercitationem, quis maiores facere! At odio amet
          saepe esse cupiditate. Veritatis, sequi! Ipsa sunt saepe eaque
          suscipit nisi voluptatem. Et.
        </p>

        <div id="bottomDiv"></div>
      </Card>
      <Card title="scroll smooth to top">
        <a
          className="rounded bg-blue-500 p-2 text-white shadow-lg hover:bg-gray-400"
          href="#topDiv"
        >
          Scroll To Top
        </a>
      </Card>
    </div>
  )
}
export default Interactivity

// <!-- Cursor
//   cursor-auto	          cursor: auto;
//   cursor-default	      cursor: default;
//   cursor-pointer	      cursor: pointer;
//   cursor-wait	          cursor: wait;
//   cursor-text	          cursor: text;
//   cursor-move	          cursor: move;
//   cursor-help	          cursor: help;
//   cursor-not-allowed	  cursor: not-allowed;
//   cursor-none	          cursor: none;
//   cursor-context-menu	  cursor: context-menu;
//   cursor-progress	      cursor: progress;
//   cursor-cell	          cursor: cell;
//   cursor-crosshair	    cursor: crosshair;
//   cursor-vertical-text	cursor: vertical-text;
//   cursor-alias	        cursor: alias;
//   cursor-copy	          cursor: copy;
//   cursor-no-drop	      cursor: no-drop;
//   cursor-grab	          cursor: grab;
//   cursor-grabbing	      cursor: grabbing;
//   cursor-all-scroll	    cursor: all-scroll;
//   cursor-col-resize	    cursor: col-resize;
//   cursor-row-resize	    cursor: row-resize;
//   cursor-n-resize	      cursor: n-resize;
//   cursor-e-resize	      cursor: e-resize;
//   cursor-s-resize	      cursor: s-resize;
//   cursor-w-resize	      cursor: w-resize;
//   cursor-ne-resize	    cursor: ne-resize;
//   cursor-nw-resize	    cursor: nw-resize;
//   cursor-se-resize	    cursor: se-resize;
//   cursor-sw-resize	    cursor: sw-resize;
//   cursor-ew-resize	    cursor: ew-resize;
//   cursor-ns-resize	    cursor: ns-resize;
//   cursor-nesw-resize	  cursor: nesw-resize;
//   cursor-nwse-resize	  cursor: nwse-resize;
//   cursor-zoom-in	      cursor: zoom-in;
//   cursor-zoom-out	      cursor: zoom-out;
// -->
