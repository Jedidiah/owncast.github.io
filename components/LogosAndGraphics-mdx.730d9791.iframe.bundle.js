"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[9933],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./.storybook/stories-category-doc-pages/LogosAndGraphics.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_tmp_tmp_CVEzq9PZRS_owncast_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_ImageAsset__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/stories-category-doc-pages/ImageAsset.tsx");function _createMdxContent(props){const _components={h1:"h1",...(0,_tmp_tmp_CVEzq9PZRS_owncast_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{title:"owncast/Project Assets/Logos & Graphics",parameters:{chromatic:{disableSnapshot:!0}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"logos--graphics",children:"Logos & Graphics"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ImageAsset__WEBPACK_IMPORTED_MODULE_3__.a,{images:[{src:"project/header.png",name:"header.png"},{src:"project/kiss-cut-stickers-5.5x5.5-default-60874a6c11849.png",name:"kiss-cut-stickers-5.5x5.5-default-60874a6c11849.png"},{src:"project/logo-glare-outlined.png",name:"logo-glare-outlined.png"},{src:"project/logo-glare-vector.svg",name:"logo-glare-vector.svg"},{src:"project/logo-noglare-vector.svg",name:"logo-noglare-vector.svg"},{src:"project/logo-translucent-grey.svg",name:"logo-translucent-grey.svg"},{src:"project/logo-white.svg",name:"logo-white.svg"},{src:"project/owncast-background.png",name:"owncast-background.png"},{src:"project/owncast-browser-mobile.png",name:"owncast-browser-mobile.png"},{src:"project/sticker-bigtech-alt.png",name:"sticker-bigtech-alt.png"}]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_tmp_tmp_CVEzq9PZRS_owncast_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./.storybook/stories-category-doc-pages/ImageAsset.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>ImageRow});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ImageAsset=({name,src})=>{const imageStyle={width:"100%",height:"80%",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center",marginTop:"5px",backgroundImage:`url(${src})`};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figure",{style:{borderRadius:"20px",width:"12vw",height:"12vw",minWidth:"100px",minHeight:"100px",borderWidth:"1.5px",borderStyle:"solid",borderColor:"lightgray",overflow:"hidden",margin:"0.3vw"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:src,target:"_blank",rel:"noopener noreferrer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:imageStyle}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption",{style:{textAlign:"center",color:"gray",fontSize:"0.8em"},children:name})]})})},rowStyle={display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center"},ImageRow=props=>{const{images}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:rowStyle,children:images.map((image=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImageAsset,{src:image.src,name:image.name},image.src)))})};try{ImageAsset.displayName="ImageAsset",ImageAsset.__docgenInfo={description:"",displayName:"ImageAsset",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/stories-category-doc-pages/ImageAsset.tsx#ImageAsset"]={docgenInfo:ImageAsset.__docgenInfo,name:"ImageAsset",path:".storybook/stories-category-doc-pages/ImageAsset.tsx#ImageAsset"})}catch(__react_docgen_typescript_loader_error){}try{ImageRow.displayName="ImageRow",ImageRow.__docgenInfo={description:"",displayName:"ImageRow",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"ImageAssetProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/stories-category-doc-pages/ImageAsset.tsx#ImageRow"]={docgenInfo:ImageRow.__docgenInfo,name:"ImageRow",path:".storybook/stories-category-doc-pages/ImageAsset.tsx#ImageRow"})}catch(__react_docgen_typescript_loader_error){}}}]);