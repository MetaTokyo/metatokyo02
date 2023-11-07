import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"
import Script2 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script3 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const metaaniKpp = new Entity('metaaniKpp')
engine.addEntity(metaaniKpp)
metaaniKpp.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(15, 0.49649572372436523, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(16.908781051635742, 16.908781051635742, 16.326169967651367)
})
metaaniKpp.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("d5d29267-ef0c-44e4-ab9b-e6f1b957f4c4/metaani_kpp.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
metaaniKpp.addComponentOrReplace(gltfShape)

const metaaniLowPink3 = new Entity('metaaniLowPink3')
engine.addEntity(metaaniLowPink3)
metaaniLowPink3.setParent(_scene)
const gltfShape2 = new GLTFShape("2433fb78-bbe6-4095-8738-fe066b49036c/metaani_low_pink.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
metaaniLowPink3.addComponentOrReplace(gltfShape2)
const transform3 = new Transform({
  position: new Vector3(25, 0.2746877670288086, 11.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000019073486328, 1.5, 1.5000019073486328)
})
metaaniLowPink3.addComponentOrReplace(transform3)

const metaaniLowPink9 = new Entity('metaaniLowPink9')
engine.addEntity(metaaniLowPink9)
metaaniLowPink9.setParent(_scene)
metaaniLowPink9.addComponentOrReplace(gltfShape2)
const transform4 = new Transform({
  position: new Vector3(14, 0.2746877670288086, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
metaaniLowPink9.addComponentOrReplace(transform4)

const metaaniLowPink10 = new Entity('metaaniLowPink10')
engine.addEntity(metaaniLowPink10)
metaaniLowPink10.setParent(_scene)
metaaniLowPink10.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(14, 0.2746877670288086, 8),
  rotation: new Quaternion(2.1885240244462587e-16, -0.5555702447891235, 6.622911996601033e-8, -0.8314695954322815),
  scale: new Vector3(1.499999761581421, 1.5, 1.499999761581421)
})
metaaniLowPink10.addComponentOrReplace(transform5)

const metaaniLowPink11 = new Entity('metaaniLowPink11')
engine.addEntity(metaaniLowPink11)
metaaniLowPink11.setParent(_scene)
metaaniLowPink11.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(14, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
metaaniLowPink11.addComponentOrReplace(transform6)

const metaaniLowPink14 = new Entity('metaaniLowPink14')
engine.addEntity(metaaniLowPink14)
metaaniLowPink14.setParent(_scene)
metaaniLowPink14.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(7.5, 0.2746877670288086, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
metaaniLowPink14.addComponentOrReplace(transform7)

const metaaniLowPink16 = new Entity('metaaniLowPink16')
engine.addEntity(metaaniLowPink16)
metaaniLowPink16.setParent(_scene)
metaaniLowPink16.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(25.5, 0.2746877670288086, 28),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
metaaniLowPink16.addComponentOrReplace(transform8)

const metaaniLowPink19 = new Entity('metaaniLowPink19')
engine.addEntity(metaaniLowPink19)
metaaniLowPink19.setParent(_scene)
metaaniLowPink19.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(18, 0, 16.5),
  rotation: new Quaternion(8.817940676788736e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
metaaniLowPink19.addComponentOrReplace(transform9)

const metaaniLowPink20 = new Entity('metaaniLowPink20')
engine.addEntity(metaaniLowPink20)
metaaniLowPink20.setParent(_scene)
metaaniLowPink20.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(18, 0, 20),
  rotation: new Quaternion(8.817940676788736e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
metaaniLowPink20.addComponentOrReplace(transform10)

const metaaniLowPink21 = new Entity('metaaniLowPink21')
engine.addEntity(metaaniLowPink21)
metaaniLowPink21.setParent(_scene)
metaaniLowPink21.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(7.5, 0.24518904089927673, 18.5),
  rotation: new Quaternion(8.817940676788736e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5000033378601074, 1.5, 1.5000033378601074)
})
metaaniLowPink21.addComponentOrReplace(transform11)

const metaaniLowPink22 = new Entity('metaaniLowPink22')
engine.addEntity(metaaniLowPink22)
metaaniLowPink22.setParent(_scene)
metaaniLowPink22.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(16, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
metaaniLowPink22.addComponentOrReplace(transform12)

const metaaniLowPink24 = new Entity('metaaniLowPink24')
engine.addEntity(metaaniLowPink24)
metaaniLowPink24.setParent(_scene)
metaaniLowPink24.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(16, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
metaaniLowPink24.addComponentOrReplace(transform13)

const metaaniLowBLUE = new Entity('metaaniLowBLUE')
engine.addEntity(metaaniLowBLUE)
metaaniLowBLUE.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(7, 0.20924723148345947, 15.5),
  rotation: new Quaternion(-5.531641835668406e-16, -0.5291494727134705, 6.307953270834332e-8, 0.8485286235809326),
  scale: new Vector3(1.5, 1.5, 1.5)
})
metaaniLowBLUE.addComponentOrReplace(transform14)
const gltfShape3 = new GLTFShape("cf2b5d8f-0b5d-4943-b324-209cad86e22f/metaani_low_BLUE.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
metaaniLowBLUE.addComponentOrReplace(gltfShape3)

const metaaniLowBLUE2 = new Entity('metaaniLowBLUE2')
engine.addEntity(metaaniLowBLUE2)
metaaniLowBLUE2.setParent(_scene)
metaaniLowBLUE2.addComponentOrReplace(gltfShape3)
const transform15 = new Transform({
  position: new Vector3(10.5, 0.20924723148345947, 6),
  rotation: new Quaternion(-5.25009782487997e-15, -0.9741655588150024, 1.1612958417117625e-7, 0.2258351743221283),
  scale: new Vector3(1.5000009536743164, 1.5, 1.5000009536743164)
})
metaaniLowBLUE2.addComponentOrReplace(transform15)

const metaaniLowBLUE3 = new Entity('metaaniLowBLUE3')
engine.addEntity(metaaniLowBLUE3)
metaaniLowBLUE3.setParent(_scene)
metaaniLowBLUE3.addComponentOrReplace(gltfShape3)
const transform16 = new Transform({
  position: new Vector3(23, 0.20924723148345947, 6),
  rotation: new Quaternion(-1.1720486370716057e-14, -0.9354563355445862, 1.1151508516604736e-7, -0.35344231128692627),
  scale: new Vector3(1.5000014305114746, 1.5, 1.5000014305114746)
})
metaaniLowBLUE3.addComponentOrReplace(transform16)

const metaaniLowBLUE4 = new Entity('metaaniLowBLUE4')
engine.addEntity(metaaniLowBLUE4)
metaaniLowBLUE4.setParent(_scene)
metaaniLowBLUE4.addComponentOrReplace(gltfShape3)
const transform17 = new Transform({
  position: new Vector3(25, 0.20924723148345947, 19.5),
  rotation: new Quaternion(1.484896698601603e-14, 0.41154611110687256, -4.9060112417009805e-8, 0.9113889932632446),
  scale: new Vector3(1.5000019073486328, 1.5, 1.5000019073486328)
})
metaaniLowBLUE4.addComponentOrReplace(transform17)

const metaaniLowBLUE5 = new Entity('metaaniLowBLUE5')
engine.addEntity(metaaniLowBLUE5)
metaaniLowBLUE5.setParent(_scene)
metaaniLowBLUE5.addComponentOrReplace(gltfShape3)
const transform18 = new Transform({
  position: new Vector3(23, 0.20924723148345947, 26),
  rotation: new Quaternion(-1.3818869890069342e-14, -0.031445592641830444, 3.748596100194845e-9, -0.9995055198669434),
  scale: new Vector3(1.5000019073486328, 1.5, 1.5000019073486328)
})
metaaniLowBLUE5.addComponentOrReplace(transform18)

const metaaniLowGREEN = new Entity('metaaniLowGREEN')
engine.addEntity(metaaniLowGREEN)
metaaniLowGREEN.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(3, 0.20479583740234375, 24.5),
  rotation: new Quaternion(8.839015915307607e-16, -0.7730104923248291, 9.21500173944878e-8, 0.6343932747840881),
  scale: new Vector3(1.5000007152557373, 1.5, 1.5000007152557373)
})
metaaniLowGREEN.addComponentOrReplace(transform19)
const gltfShape4 = new GLTFShape("ee95b579-d352-4122-b190-b927c431b167/metaani_low_GREEN.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
metaaniLowGREEN.addComponentOrReplace(gltfShape4)

const metaaniLowGREEN2 = new Entity('metaaniLowGREEN2')
engine.addEntity(metaaniLowGREEN2)
metaaniLowGREEN2.setParent(_scene)
metaaniLowGREEN2.addComponentOrReplace(gltfShape4)
const transform20 = new Transform({
  position: new Vector3(17, 0.20479583740234375, 28.5),
  rotation: new Quaternion(-8.224116476533965e-15, 0.09801718592643738, -1.1684565315306372e-8, -0.9951847791671753),
  scale: new Vector3(1.5000011920928955, 1.5, 1.5000011920928955)
})
metaaniLowGREEN2.addComponentOrReplace(transform20)

const metaaniLowGREEN3 = new Entity('metaaniLowGREEN3')
engine.addEntity(metaaniLowGREEN3)
metaaniLowGREEN3.setParent(_scene)
metaaniLowGREEN3.addComponentOrReplace(gltfShape4)
const transform21 = new Transform({
  position: new Vector3(25.5, 0.20479583740234375, 16),
  rotation: new Quaternion(-9.734279659732396e-15, -0.4713967442512512, 5.6194863873315626e-8, -0.8819213509559631),
  scale: new Vector3(1.500001072883606, 1.5, 1.500001072883606)
})
metaaniLowGREEN3.addComponentOrReplace(transform21)

const metaaniLowGREEN4 = new Entity('metaaniLowGREEN4')
engine.addEntity(metaaniLowGREEN4)
metaaniLowGREEN4.setParent(_scene)
metaaniLowGREEN4.addComponentOrReplace(gltfShape4)
const transform22 = new Transform({
  position: new Vector3(15, 0.20479583740234375, 4),
  rotation: new Quaternion(1.2512631582988279e-14, 0.8819212913513184, -1.0513321768712558e-7, -0.4713967442512512),
  scale: new Vector3(1.5000038146972656, 1.5, 1.5000038146972656)
})
metaaniLowGREEN4.addComponentOrReplace(transform22)

const metaaniLowGREEN5 = new Entity('metaaniLowGREEN5')
engine.addEntity(metaaniLowGREEN5)
metaaniLowGREEN5.setParent(_scene)
metaaniLowGREEN5.addComponentOrReplace(gltfShape4)
const transform23 = new Transform({
  position: new Vector3(7, 0.20479583740234375, 8),
  rotation: new Quaternion(4.228468517306983e-15, -0.9569404125213623, 1.1407617250824842e-7, 0.2902846336364746),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
metaaniLowGREEN5.addComponentOrReplace(transform23)

const metaaniLowYELLOW = new Entity('metaaniLowYELLOW')
engine.addEntity(metaaniLowYELLOW)
metaaniLowYELLOW.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(11, 0.35415077209472656, 25.5),
  rotation: new Quaternion(0, 0.09801710397005081, -1.1684546663559559e-8, -0.9951847195625305),
  scale: new Vector3(1.5, 1.5, 1.5)
})
metaaniLowYELLOW.addComponentOrReplace(transform24)
const gltfShape5 = new GLTFShape("771ce836-e7b6-4e1f-8031-2aa3f628b683/metaani_low_YELLOW.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
metaaniLowYELLOW.addComponentOrReplace(gltfShape5)

const metaaniLowYELLOW2 = new Entity('metaaniLowYELLOW2')
engine.addEntity(metaaniLowYELLOW2)
metaaniLowYELLOW2.setParent(_scene)
metaaniLowYELLOW2.addComponentOrReplace(gltfShape5)
const transform25 = new Transform({
  position: new Vector3(28.5, 0.35415077209472656, 29),
  rotation: new Quaternion(0, 0.09801710397005081, -1.1684546663559559e-8, -0.9951847195625305),
  scale: new Vector3(0.961939811706543, 1, 0.038060206919908524)
})
metaaniLowYELLOW2.addComponentOrReplace(transform25)

const metaaniLowYELLOW3 = new Entity('metaaniLowYELLOW3')
engine.addEntity(metaaniLowYELLOW3)
metaaniLowYELLOW3.setParent(_scene)
metaaniLowYELLOW3.addComponentOrReplace(gltfShape5)
const transform26 = new Transform({
  position: new Vector3(28.5, 0.35415077209472656, 9.5),
  rotation: new Quaternion(2.427593673973746e-15, -0.5555702447891235, 6.622912707143769e-8, -0.8314695954322815),
  scale: new Vector3(1.499999761581421, 1.5, 1.499999761581421)
})
metaaniLowYELLOW3.addComponentOrReplace(transform26)

const metaaniLowYELLOW4 = new Entity('metaaniLowYELLOW4')
engine.addEntity(metaaniLowYELLOW4)
metaaniLowYELLOW4.setParent(_scene)
metaaniLowYELLOW4.addComponentOrReplace(gltfShape5)
const transform27 = new Transform({
  position: new Vector3(19, 0.35415077209472656, 7),
  rotation: new Quaternion(2.9965450693697493e-15, -0.9807853698730469, 1.1691871293351142e-7, -0.19509032368659973),
  scale: new Vector3(1.5000015497207642, 1.5, 1.5000015497207642)
})
metaaniLowYELLOW4.addComponentOrReplace(transform27)

const metaaniLowYELLOW5 = new Entity('metaaniLowYELLOW5')
engine.addEntity(metaaniLowYELLOW5)
metaaniLowYELLOW5.setParent(_scene)
metaaniLowYELLOW5.addComponentOrReplace(gltfShape5)
const transform28 = new Transform({
  position: new Vector3(1.5, 0.35415077209472656, 4.5),
  rotation: new Quaternion(-9.478568883285795e-15, 0.7730104923248291, -9.21500173944878e-8, -0.6343933343887329),
  scale: new Vector3(1.5000035762786865, 1.5, 1.5000035762786865)
})
metaaniLowYELLOW5.addComponentOrReplace(transform28)

const metaaniKppDCL = new Entity('metaaniKppDCL')
engine.addEntity(metaaniKppDCL)
metaaniKppDCL.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(16.199342727661133, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
metaaniKppDCL.addComponentOrReplace(transform29)
const gltfShape6 = new GLTFShape("1aed5e17-50d6-4389-99e3-7de0dc44a0a0/Metaani_kpp_DCL01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
metaaniKppDCL.addComponentOrReplace(gltfShape6)

const plopela = new Entity('plopela')
engine.addEntity(plopela)
plopela.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(16.390575408935547, 0, 16.004426956176758),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plopela.addComponentOrReplace(transform30)
const gltfShape7 = new GLTFShape("09d3912b-1434-47de-9f1e-5cf57223bbc2/plopela.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
plopela.addComponentOrReplace(gltfShape7)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(3.5, 0.21853303909301758, 3.4943857192993164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
radio.addComponentOrReplace(transform31)

const movePlopela = new Entity('movePlopela')
engine.addEntity(movePlopela)
movePlopela.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(16, 0.035706520080566406, 16.0419979095459),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
movePlopela.addComponentOrReplace(transform32)
const gltfShape8 = new GLTFShape("6a75f836-f7b0-42b4-86e5-a4852841fea7/move_plopela.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
movePlopela.addComponentOrReplace(gltfShape8)

const metaaniLowWHITE = new Entity('metaaniLowWHITE')
engine.addEntity(metaaniLowWHITE)
metaaniLowWHITE.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(5.5, 0.5, 28.94902229309082),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
metaaniLowWHITE.addComponentOrReplace(transform33)
const gltfShape9 = new GLTFShape("c137c8d2-270f-4e0f-9144-d5be05ab10eb/metaani_low_WHITE.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
metaaniLowWHITE.addComponentOrReplace(gltfShape9)

const metaaniLowWHITE2 = new Entity('metaaniLowWHITE2')
engine.addEntity(metaaniLowWHITE2)
metaaniLowWHITE2.setParent(_scene)
metaaniLowWHITE2.addComponentOrReplace(gltfShape9)
const transform34 = new Transform({
  position: new Vector3(22.5, 0.16158437728881836, 22.44902229309082),
  rotation: new Quaternion(-7.264255352573603e-15, 0.2340276539325714, -2.789825614968322e-8, 0.9722299575805664),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowWHITE2.addComponentOrReplace(transform34)

const metaaniLowWHITE3 = new Entity('metaaniLowWHITE3')
engine.addEntity(metaaniLowWHITE3)
metaaniLowWHITE3.setParent(_scene)
metaaniLowWHITE3.addComponentOrReplace(gltfShape9)
const transform35 = new Transform({
  position: new Vector3(26, 0.15856385231018066, 5.44902229309082),
  rotation: new Quaternion(2.603421831955978e-15, -0.0980171263217926, 1.1684547551737978e-8, 0.9951847791671753),
  scale: new Vector3(0.9999997019767761, 1, 0.9999997019767761)
})
metaaniLowWHITE3.addComponentOrReplace(transform35)

const metaaniLowWHITE4 = new Entity('metaaniLowWHITE4')
engine.addEntity(metaaniLowWHITE4)
metaaniLowWHITE4.setParent(_scene)
metaaniLowWHITE4.addComponentOrReplace(gltfShape9)
const transform36 = new Transform({
  position: new Vector3(7, 0.16158437728881836, 11.94902229309082),
  rotation: new Quaternion(1.8971593230849432e-14, 0.629854679107666, -7.508452881666017e-8, -0.7767130732536316),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
metaaniLowWHITE4.addComponentOrReplace(transform36)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(3.5907821655273438, 0.7035481929779053, 20.578533172607422),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.215744495391846, 2.782395362854004, 1.0000035762786865)
})
imageFromURL.addComponentOrReplace(transform37)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(3.552652597427368, 1.9520137310028076, 11.919734001159668),
  rotation: new Quaternion(1.9792379591683637e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform38)

const yukaxxx = new Entity('yukaxxx')
engine.addEntity(yukaxxx)
yukaxxx.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(24.248416900634766, 0.1510906219482422, 16.216896057128906),
  rotation: new Quaternion(3.452632712675906e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.9775819182395935, 1, 0.9665340185165405)
})
yukaxxx.addComponentOrReplace(transform39)
const gltfShape10 = new GLTFShape("76b83cba-65dc-4615-9805-d4e154591961/yukaxxx2.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
yukaxxx.addComponentOrReplace(gltfShape10)

const metaaniLowBLUE6 = new Entity('metaaniLowBLUE6')
engine.addEntity(metaaniLowBLUE6)
metaaniLowBLUE6.setParent(_scene)
metaaniLowBLUE6.addComponentOrReplace(gltfShape3)
const transform40 = new Transform({
  position: new Vector3(34.5, 0.20924723148345947, 24),
  rotation: new Quaternion(-1.3818869890069342e-14, -0.031445592641830444, 3.748596100194845e-9, -0.9995055198669434),
  scale: new Vector3(1.500001311302185, 1.5, 1.500001311302185)
})
metaaniLowBLUE6.addComponentOrReplace(transform40)

const metaaniLowYELLOW6 = new Entity('metaaniLowYELLOW6')
engine.addEntity(metaaniLowYELLOW6)
metaaniLowYELLOW6.setParent(_scene)
metaaniLowYELLOW6.addComponentOrReplace(gltfShape5)
const transform41 = new Transform({
  position: new Vector3(36.33072280883789, 0.35415077209472656, 16.65636444091797),
  rotation: new Quaternion(0, 0.09801710397005081, -1.1684546663559559e-8, -0.9951847195625305),
  scale: new Vector3(1.5, 1.5, 1.5)
})
metaaniLowYELLOW6.addComponentOrReplace(transform41)

const metaaniLowGREEN6 = new Entity('metaaniLowGREEN6')
engine.addEntity(metaaniLowGREEN6)
metaaniLowGREEN6.setParent(_scene)
metaaniLowGREEN6.addComponentOrReplace(gltfShape4)
const transform42 = new Transform({
  position: new Vector3(40.5, 0.20479583740234375, 26),
  rotation: new Quaternion(-8.224116476533965e-15, 0.09801718592643738, -1.1684565315306372e-8, -0.9951847791671753),
  scale: new Vector3(1.5000035762786865, 1.5, 1.5000035762786865)
})
metaaniLowGREEN6.addComponentOrReplace(transform42)

const metaaniLowPink = new Entity('metaaniLowPink')
engine.addEntity(metaaniLowPink)
metaaniLowPink.setParent(_scene)
metaaniLowPink.addComponentOrReplace(gltfShape2)
const transform43 = new Transform({
  position: new Vector3(38.5, 0.24518904089927673, 19),
  rotation: new Quaternion(8.817940676788736e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5000088214874268, 1.5, 1.5000088214874268)
})
metaaniLowPink.addComponentOrReplace(transform43)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(4.056306838989258, 1.850907564163208, 16.909637451171875),
  rotation: new Quaternion(1.9792379591683637e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
externalLink2.addComponentOrReplace(transform44)

const metaaniLowYELLOW7 = new Entity('metaaniLowYELLOW7')
engine.addEntity(metaaniLowYELLOW7)
metaaniLowYELLOW7.setParent(_scene)
metaaniLowYELLOW7.addComponentOrReplace(gltfShape5)
const transform45 = new Transform({
  position: new Vector3(33.90434265136719, 0.35415077209472656, 6.151878356933594),
  rotation: new Quaternion(2.427593673973746e-15, -0.5555702447891235, 6.622912707143769e-8, -0.8314695954322815),
  scale: new Vector3(1.499998688697815, 1.5, 1.499998688697815)
})
metaaniLowYELLOW7.addComponentOrReplace(transform45)

const metaaniLowWHITE5 = new Entity('metaaniLowWHITE5')
engine.addEntity(metaaniLowWHITE5)
metaaniLowWHITE5.setParent(_scene)
metaaniLowWHITE5.addComponentOrReplace(gltfShape9)
const transform46 = new Transform({
  position: new Vector3(37.5, 0.15856385231018066, 24.449020385742188),
  rotation: new Quaternion(2.603421831955978e-15, -0.0980171263217926, 1.1684547551737978e-8, 0.9951847791671753),
  scale: new Vector3(0.9999997615814209, 1, 0.9999997615814209)
})
metaaniLowWHITE5.addComponentOrReplace(transform46)

const metaaniLowYELLOW8 = new Entity('metaaniLowYELLOW8')
engine.addEntity(metaaniLowYELLOW8)
metaaniLowYELLOW8.setParent(_scene)
metaaniLowYELLOW8.addComponentOrReplace(gltfShape5)
const transform47 = new Transform({
  position: new Vector3(39.1805305480957, 0.35415077209472656, 9.864788055419922),
  rotation: new Quaternion(2.9965450693697493e-15, -0.9807853698730469, 1.1691871293351142e-7, -0.19509032368659973),
  scale: new Vector3(1.5000100135803223, 1.5, 1.5000100135803223)
})
metaaniLowYELLOW8.addComponentOrReplace(transform47)

const metaaniLowPink2 = new Entity('metaaniLowPink2')
engine.addEntity(metaaniLowPink2)
metaaniLowPink2.setParent(_scene)
metaaniLowPink2.addComponentOrReplace(gltfShape2)
const transform48 = new Transform({
  position: new Vector3(32, 0.2746877670288086, 6.5),
  rotation: new Quaternion(2.1885240244462587e-16, -0.5555702447891235, 6.622911996601033e-8, -0.8314695954322815),
  scale: new Vector3(1.4999995231628418, 1.5, 1.4999995231628418)
})
metaaniLowPink2.addComponentOrReplace(transform48)

const metaaniLowBLUE7 = new Entity('metaaniLowBLUE7')
engine.addEntity(metaaniLowBLUE7)
metaaniLowBLUE7.setParent(_scene)
metaaniLowBLUE7.addComponentOrReplace(gltfShape3)
const transform49 = new Transform({
  position: new Vector3(28.5, 0.20924723148345947, 4.5),
  rotation: new Quaternion(-5.25009782487997e-15, -0.9741655588150024, 1.1612958417117625e-7, 0.2258351743221283),
  scale: new Vector3(1.5000014305114746, 1.5, 1.5000014305114746)
})
metaaniLowBLUE7.addComponentOrReplace(transform49)

const metaaniLowWHITE6 = new Entity('metaaniLowWHITE6')
engine.addEntity(metaaniLowWHITE6)
metaaniLowWHITE6.setParent(_scene)
metaaniLowWHITE6.addComponentOrReplace(gltfShape9)
const transform50 = new Transform({
  position: new Vector3(42.446533203125, 0.16158437728881836, 22.880966186523438),
  rotation: new Quaternion(-7.264255352573603e-15, 0.2340276539325714, -2.789825614968322e-8, 0.9722299575805664),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowWHITE6.addComponentOrReplace(transform50)

const metaaniLowBLUE8 = new Entity('metaaniLowBLUE8')
engine.addEntity(metaaniLowBLUE8)
metaaniLowBLUE8.setParent(_scene)
metaaniLowBLUE8.addComponentOrReplace(gltfShape3)
const transform51 = new Transform({
  position: new Vector3(44.17059326171875, 0.20924723148345947, 17.27289581298828),
  rotation: new Quaternion(-1.3818869890069342e-14, -0.031445592641830444, 3.748596100194845e-9, -0.9995055198669434),
  scale: new Vector3(1.5000007152557373, 1.5, 1.5000007152557373)
})
metaaniLowBLUE8.addComponentOrReplace(transform51)

const glossyAethereaTiles = new Entity('glossyAethereaTiles')
engine.addEntity(glossyAethereaTiles)
glossyAethereaTiles.setParent(_scene)
const gltfShape11 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
glossyAethereaTiles.addComponentOrReplace(gltfShape11)
const transform52 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles.addComponentOrReplace(transform52)

const glossyAethereaTiles2 = new Entity('glossyAethereaTiles2')
engine.addEntity(glossyAethereaTiles2)
glossyAethereaTiles2.setParent(_scene)
glossyAethereaTiles2.addComponentOrReplace(gltfShape11)
const transform53 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles2.addComponentOrReplace(transform53)

const glossyAethereaTiles3 = new Entity('glossyAethereaTiles3')
engine.addEntity(glossyAethereaTiles3)
glossyAethereaTiles3.setParent(_scene)
glossyAethereaTiles3.addComponentOrReplace(gltfShape11)
const transform54 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles3.addComponentOrReplace(transform54)

const glossyAethereaTiles4 = new Entity('glossyAethereaTiles4')
engine.addEntity(glossyAethereaTiles4)
glossyAethereaTiles4.setParent(_scene)
glossyAethereaTiles4.addComponentOrReplace(gltfShape11)
const transform55 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles4.addComponentOrReplace(transform55)

const glossyAethereaTiles5 = new Entity('glossyAethereaTiles5')
engine.addEntity(glossyAethereaTiles5)
glossyAethereaTiles5.setParent(_scene)
glossyAethereaTiles5.addComponentOrReplace(gltfShape11)
const transform56 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles5.addComponentOrReplace(transform56)

const glossyAethereaTiles6 = new Entity('glossyAethereaTiles6')
engine.addEntity(glossyAethereaTiles6)
glossyAethereaTiles6.setParent(_scene)
glossyAethereaTiles6.addComponentOrReplace(gltfShape11)
const transform57 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles6.addComponentOrReplace(transform57)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init(options)
script2.init(options)
script3.init(options)
script1.spawn(radio, {"startOn":true,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"customStation":"https://static.wixstatic.com/mp3/ebffef_32520d42f8824ae898864cfa07048d68.mp3"}, createChannel(channelId, radio, channelBus))
script2.spawn(imageFromURL, {"image":"https://static.wixstatic.com/media/ebffef_34b695dc6bcd4448a66b09b460b24b46~mv2.png"}, createChannel(channelId, imageFromURL, channelBus))
script3.spawn(externalLink, {"url":"https://youtu.be/93QTmFoomBk"}, createChannel(channelId, externalLink, channelBus))
script3.spawn(externalLink2, {"url":"https://metatokyo.xyz/"}, createChannel(channelId, externalLink2, channelBus))