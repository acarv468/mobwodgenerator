// Move libraries
var overheadArch = ["T-Spine OH Smash", "Trap Scrub", "First Rib Mobilization", "Banded Overhead Distraction", "OH Distraction with External Rotation", "Super Front Rack", "Anterior Compartment Mobilization", "Classic Tri and Lat Stretch", "Banded Elbow Extension"];
var squatArch = ["Glute Smash", "High Glute Smash", "Side Hip Smash", "SL Flexion with External Rotation", "Hip External Rotation", "Olympic Wall Squat with ER", "Quad Smash", "Quad Stretch", "Adductor Smash", "Olympic Wall Squat", "Posterior Chain Smash", "Posterior Chain Floss"];
var hangArch  = ["T-Spine Roller Smash", "Shoulder Capsule Mobilization", "Shoulder Rotation Smash", "Reverse Sleeper Stretch", "Anterior Compartment Mob", "Banded Bully", "Bully Extension Bias", "Trap Scrub", "Sink Mobilization"];
var frontRackArch = ["T-Spine Roller Smash", "Shoulder Capsule Mobilization", "Shoulder Rotation Smash", "OH Distraction with ER", "Super Front Rack", "Classic Tri and Lat Stretch", "Banded Lateral Opener", "Anterior Compartment Mob", "Banded Elbow Extension", "Banded Elbow Distraction", "Forearm Smash", "Banded Wrist Distraction"];
var pistolArch = ["Quad Smash", "Couch Stretch", "Gap and Smash Mobilization", "Calf Smash", "Classic Calf Stretch", "Banded Heel Cord: Anterior Bias", "Banded Heel Cord: Posterior Bias"];
var lungeArch = ["Glute Smash", "Side Hip Smash", "Olympic Wall Squat with IR", "Quad Smash", "Banded Hip Extension", "Banded Hip Extension Lunge", "Quad Stretch", "Trailing Leg Hip Extension", "Reverse Ballerina", "Foot Smash", "SL Flexion with ER"];
var pressArch = ["T-Spine Roller Smash", "Shoulder Capsule Mob", "Trap Scrub", "Shoulder Rotation Smash", "Serratus Smash", "Anterior Compartment Mob", "Forearm Smash", "Bully Extension Bias", "Banded Lateral Opener", "Banded Elbow Distraction"];

var jawHeadNeck = ["Jaw Mob", "Head Mob", "Posterior Neck Mob"];
var calf = ["Calf Roller Smash", "Bone Saw Calf Smash", "Classic Calf Stretch", "Banded Heel Cord: Anterior", "Banded Heel Cord: Posterior"];
var upperBack = ["Extension Smash", "Side to Side Smash", "OH Extension Smash", "OH Banded Distraction", "OH Rib Mob", "Trap Scrub", "First Rib Mob"];
var trunk = ["Low Back Smash", "QL Side Smash", "Oblique Side Smash", "Classic Spinal Twist", "Gut Smash"];
var shin = ["Shin Smash", "Double-Leg Plantarflexion"];
var ankleFoot = ["Ball Whack", "Inside Foot Smash", "Toe Dorsiflexion", "Toe Plantarflexion"];
var postShoulder = ["Shoulder Capsule Mob", "Shoulder Rotator Smash", "OH Tissue Smash", "Wall Smash", "Serratus Smash", "Banded OH Distraction", "OH Distraction with ER", "Super Front Rack", "Classic Tri and Lat Stretch", "Reverse Sleeper Stretch"];
var arm = ["Tri Extension Smash", "Banded Elbow Extension", "Banded Elbow Distraction", "Forearm Smash", "Wrist Tack and Spin", "Banded Wrist Distraction"];
var adductors = ["Adductor Smash", "Olympic Wall Squat with Band", "Banded Super Frog"];
var hamstrings = ["Hamstring Smash", "Banded Posterior Chain Floss 1", "Banded Posterior Chain Floss 2", "High ball Smash"];
var knee = ["Lacrosse Ball Gap and Smash", "Flexion Gapping"];
var glutes = ["Glute Smash", "High Glute Smash", "Side Hip Smash", "SL Flexion with ER", "High SL Flexion with ER", "Pigeon Stretch", "High Hip ER", "Olympic Wall Squat with ER", "Olympic Wall Squat with ER"];
var hipFlexorsQuads = ["Quad Smash", "Suprapatellar Smash", "Banded Hip Extension", "Banded Hip Extension Lunge", "Couch Stretch", "Super Couch", "Banded Trailing Leg Hip Extension", "Reverse Ballerina", "Banded Hurdler"];
var antShoulder = ["Blue Angel", "Pec Wall Smash", "Banded Bully", "Triple Bully", "Bully Extension Bias", "Banded Lateral Opener"];

//Image Library
var overheadArchImgs = ["https://image.ibb.co/gEGi1Q/Overhead_Smash.jpg", "https://image.ibb.co/dyCqgQ/Trap_Scrub.jpg", "https://image.ibb.co/ebFkgQ/First_Rib_Mob.jpg", "https://image.ibb.co/dRakFk/banded_oh_distraction_with_er.jpg", "https://image.ibb.co/daeCvk/super_front_rack.jpg", "https://image.ibb.co/icFoJ5/anterior_compartment_mob.jpg", "https://image.ibb.co/n6Hbo5/classic_lat_and_tri_stretch.jpg", "https://image.ibb.co/gdQAWQ/banded_elbow_extension.jpg"];
var squatArchImgs = ["https://image.ibb.co/ioZd1Q/glute_smash.jpg", "https://image.ibb.co/myJuak/high_glute_smash.jpg", "https://image.ibb.co/n3x1o5/Side_hip_smash.jpg", "https://image.ibb.co/e16vy5/sl_flexion_with_external_rotation.jpg", "https://image.ibb.co/fLpR5k/hip_external_rotation.jpg", "https://image.ibb.co/ha6Eak/Olympic_wall_squat_with_er.jpg", "Quad Smash", "https://image.ibb.co/it2eak/Quad_stretch.jpg", "https://image.ibb.co/cZf7vk/adductor_smash.jpg", "https://image.ibb.co/dez31Q/olympic_wall_squat.jpg", "Posterior Chain Smash", "https://image.ibb.co/dAANd5/posterior_chain_floss.jpg"];
var hangArchImgs  = ["https://image.ibb.co/hKbE85/T_Spine_Roller_Smash.jpg", "https://image.ibb.co/mSX1o5/shoulder_capsule_mob.jpg", "https://image.ibb.co/kJR65k/shoulder_rotation_smash.jpg", "https://image.ibb.co/ivj0Fk/reverse_sleeper_stretch.jpg Stretch", "https://image.ibb.co/icFoJ5/anterior_compartment_mob.jpg", "https://image.ibb.co/fuRHBQ/banded_bully.jpg", "https://image.ibb.co/hP6TJ5/bully_extension_bias.jpg", "https://image.ibb.co/dyCqgQ/Trap_Scrub.jpg", "Sink Mobilization"];
var frontRackArchImgs = ["https://image.ibb.co/hKbE85/T_Spine_Roller_Smash.jpg", "https://image.ibb.co/mSX1o5/shoulder_capsule_mob.jpg", "https://image.ibb.co/kJR65k/shoulder_rotation_smash.jpg", "https://image.ibb.co/dRakFk/banded_oh_distraction_with_er.jpg", "https://image.ibb.co/daeCvk/super_front_rack.jpg", "https://image.ibb.co/n6Hbo5/classic_lat_and_tri_stretch.jpg", "https://image.ibb.co/iCy8J5/banded_lateral_opener.jpg", "https://image.ibb.co/icFoJ5/anterior_compartment_mob.jpg", "https://image.ibb.co/gdQAWQ/banded_elbow_extension.jpg", "https://image.ibb.co/kntay5/banded_elbow_distraction.jpg", "https://image.ibb.co/iLCnvk/forearm_smash.jpg", "https://image.ibb.co/dH8KQk/banded_wrist_distraction.jpg"];
var pistolArchImgs = ["Quad Smash", "https://image.ibb.co/it2eak/Quad_stretch.jpg", "Gap and Smash Mobilization", "https://image.ibb.co/gQJGo5/calf_smash.jpg", "https://image.ibb.co/c8Hy1Q/classic_calf_stretch_1.jpg", "https://image.ibb.co/ioU0Fk/banded_heel_cord_anterior.jpg", "https://image.ibb.co/drFZQk/banded_heel_cord_posterior.jpg"];
var lungeArchImgs = ["https://image.ibb.co/ioZd1Q/glute_smash.jpg", "https://image.ibb.co/n3x1o5/Side_hip_smash.jpg", "https://image.ibb.co/hTMfFk/olympic_wall_sqat_with_ir.jpg", "Quad Smash", "Banded Hip Extension", "Banded Hip Extension Lunge", "https://image.ibb.co/it2eak/Quad_stretch.jpg", "Trailing Leg Hip Extension", "https://image.ibb.co/dbusvk/reverse_ballerina.jpg", "Foot Smash", "https://image.ibb.co/e16vy5/sl_flexion_with_external_rotation.jpg"];
var pressArchImgs = ["https://image.ibb.co/hKbE85/T_Spine_Roller_Smash.jpg", "https://image.ibb.co/mSX1o5/shoulder_capsule_mob.jpg", "https://image.ibb.co/dyCqgQ/Trap_Scrub.jpg", "https://image.ibb.co/kJR65k/shoulder_rotation_smash.jpg", "https://image.ibb.co/nOR65k/serratus_smash.jpg", "https://image.ibb.co/icFoJ5/anterior_compartment_mob.jpg", "https://image.ibb.co/iLCnvk/forearm_smash.jpg", "https://image.ibb.co/hP6TJ5/bully_extension_bias.jpg", "https://image.ibb.co/iCy8J5/banded_lateral_opener.jpg", "https://image.ibb.co/kntay5/banded_elbow_distraction.jpg"];

var jawHeadNeckImgs = ["https://image.ibb.co/mCP1o5/jaw_mob.jpg", "https://image.ibb.co/hO1Eak/head_mob.jpg", "https://image.ibb.co/cEJ5gQ/neck_mob.jpg"];
var calfImgs = ["https://image.ibb.co/gQJGo5/calf_smash.jpg", "https://image.ibb.co/eGSnvk/bonesaw_calf_smash.jpg", "https://image.ibb.co/c8Hy1Q/classic_calf_stretch_1.jpg", "https://image.ibb.co/ioU0Fk/banded_heel_cord_anterior.jpg", "https://image.ibb.co/drFZQk/banded_heel_cord_posterior.jpg"];
var upperBackImgs = ["Extension Smash", "https://image.ibb.co/hF8VgQ/Side_to_side_smash.jpg", "https://image.ibb.co/gEGi1Q/Overhead_Smash.jpg", "https://image.ibb.co/hdhXvk/banded_oh_distraction.jpg", "OH Rib Mob", "https://image.ibb.co/dyCqgQ/Trap_Scrub.jpg", "https://image.ibb.co/ebFkgQ/First_Rib_Mob.jpg"];
var trunkImgs = ["Low Back Smash", "QL Side Smash", "Oblique Side Smash", "https://image.ibb.co/kpAAWQ/classic_spinal_twist.jpg", "https://image.ibb.co/b6hLFk/gut_smash.jpg"];
var shinImgs = ["https://image.ibb.co/mrq4ak/shin_smash.jpg", "https://image.ibb.co/fJGMMQ/double_plantar_flexion_1.jpg"];
var ankleFootImgs = ["https://image.ibb.co/bC2y1Q/ball_whack.jpg", "https://image.ibb.co/dQHLFk/inside_foot_mob.jpg", "https://image.ibb.co/mhwu85/toe_dorsiflexion.jpg", "https://image.ibb.co/dtZ31Q/toe_plantarflexion.jpg"];
var postShoulderImgs = ["https://image.ibb.co/mSX1o5/shoulder_capsule_mob.jpg", "https://image.ibb.co/fwtxBQ/shoulder_rotator_smash.jpg", "https://image.ibb.co/gEGi1Q/Overhead_Smash.jpg", "Wall Smash", "https://image.ibb.co/nOR65k/serratus_smash.jpg", "https://image.ibb.co/hdhXvk/banded_oh_distraction.jpg", "https://image.ibb.co/dRakFk/banded_oh_distraction_with_er.jpg", "https://image.ibb.co/daeCvk/super_front_rack.jpg", "https://image.ibb.co/n6Hbo5/classic_lat_and_tri_stretch.jpg", "https://image.ibb.co/ivj0Fk/reverse_sleeper_stretch.jpg"];
var armImgs = ["https://image.ibb.co/bHkoJ5/tri_extension_smash.jpg", "https://image.ibb.co/gdQAWQ/banded_elbow_extension.jpg", "https://image.ibb.co/kntay5/banded_elbow_distraction.jpg", "https://image.ibb.co/iLCnvk/forearm_smash.jpg", "https://image.ibb.co/jk3xBQ/wrist_tack_and_spin.jpg", "https://image.ibb.co/dH8KQk/banded_wrist_distraction.jpg"];
var adductorsImgs = ["https://image.ibb.co/cZf7vk/adductor_smash.jpg", "https://image.ibb.co/dez31Q/olympic_wall_squat.jpg", "https://image.ibb.co/ifFNd5/banded_super_frog.jpg"];
var hamstringsImgs = ["Hamstring Smash", "https://image.ibb.co/cYup85/banded_hamstring_stretch.jpg", "https://image.ibb.co/dAANd5/posterior_chain_floss.jpg", "https://image.ibb.co/hogrMQ/high_ball_smash.jpg"];
var kneeImgs = ["https://image.ibb.co/j6ouak/lax_ball_gap_and_smash.jpg", "https://image.ibb.co/dpBfFk/flexion_gapping_1.jpg"];
var glutesImgs = ["https://image.ibb.co/ioZd1Q/glute_smash.jpg", "https://image.ibb.co/myJuak/high_glute_smash.jpg", "https://image.ibb.co/n3x1o5/Side_hip_smash.jpg", "https://image.ibb.co/e16vy5/sl_flexion_with_external_rotation.jpg", "https://image.ibb.co/fY0oJ5/high_sl_flexion_with_er.jpg", "https://image.ibb.co/kpXO1Q/Pigeon_Stretch.jpg", "High Hip ER", "https://image.ibb.co/ha6Eak/Olympic_wall_squat_with_er.jpg", "https://image.ibb.co/ha6Eak/Olympic_wall_squat_with_er.jpg"];
var hipFlexorsQuadsImgs = ["Quad Smash", "https://image.ibb.co/hwEeak/Suprapretaller_Smash.jpg", "Banded Hip Extension", "Banded Hip Extension Lunge", "https://image.ibb.co/it2eak/Quad_stretch.jpg", "Super Couch", "Banded Trailing Leg Hip Extension", "https://image.ibb.co/dbusvk/reverse_ballerina.jpg", "Banded Hurdler"];
var antShoulderImgs = ["https://image.ibb.co/jAUCvk/blue_angel.jpg", "https://image.ibb.co/df9R5k/pec_wall_smash.jpg", "https://image.ibb.co/fuRHBQ/banded_bully.jpg", "https://image.ibb.co/mKOVWQ/triple_bully.jpg", "https://image.ibb.co/hP6TJ5/bully_extension_bias.jpg", "https://image.ibb.co/iCy8J5/banded_lateral_opener.jpg"];


// Random value function
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

// Getting the date
var d = new Date();
var day = d.getDay();

// Selecting a Random Move
var overheadArchRand = overheadArch.randomElement();
var squatArchRand = squatArch.randomElement();
var hangArchRand = hangArch.randomElement();
var frontRackArchRand = frontRackArch.randomElement();
var pistolArchRand = pistolArch.randomElement();
var lungeArchRand = lungeArch.randomElement();
var pressArchRand = pressArch.randomElement();

var jawHeadNeckRand = jawHeadNeck.randomElement();
var calfRand = calf.randomElement();
var upperBackRand = upperBack.randomElement();
var trunkRand = trunk.randomElement();
var shinRand = shin.randomElement();
var ankleFootRand = ankleFoot.randomElement();
var postShoulderRand = postShoulder.randomElement();
var armRand = arm.randomElement();
var adductorsRand = adductors.randomElement();
var hamstringsRand = hamstrings.randomElement();
var kneeRand = knee.randomElement();
var glutesRand = glutes.randomElement();
var hipFlexorsQuadsRand = hipFlexorsQuads.randomElement();
var antShoulderRand = antShoulder.randomElement();


// Finding out the index of the move **
var overheadArchIndex = overheadArch.indexOf(overheadArchRand);
var squatArchIndex = squatArch.indexOf(squatArchRand);
var hangArchIndex = hangArch.indexOf(hangArchRand);
var frontRackArchIndex = frontRackArch.indexOf(frontRackArchRand);
var pistolArchIndex = pistolArch.indexOf(pistolArchRand);
var lungeArchIndex = lungeArch.indexOf(lungeArchRand);
var pressArchIndex = pressArch.indexOf(pressArchRand);

var jawHeadNeckIndex = jawHeadNeck.indexOf(jawHeadNeckRand);
var calfIndex = calf.indexOf(calfRand);
var upperBackIndex = upperBack.indexOf(upperBackRand);
var trunkIndex = trunk.indexOf(trunkRand);
var shinIndex = shin.indexOf(shinRand);
var ankleFootIndex = ankleFoot.indexOf(ankleFootRand);
var postShoulderIndex = postShoulder.indexOf(postShoulderRand);
var armIndex = arm.indexOf(armRand);
var adductorsIndex = adductors.indexOf(adductorsRand);
var hamstringsIndex = hamstrings.indexOf(hamstringsRand);
var kneeIndex = knee.indexOf(kneeRand);
var glutesIndex = glutes.indexOf(glutesRand);
var hipFlexorsQuadsIndex = hipFlexorsQuads.indexOf(hipFlexorsQuadsRand);
var antShoulderIndex = antShoulder.indexOf(antShoulderRand);

// Day of the week assignments
switch(day) {
	case 1:
		document.getElementById("arch").textContent = overheadArchRand;
		document.getElementById("area1").textContent = jawHeadNeckRand;
		document.getElementById("area2").textContent = armRand;
		document.getElementById("archh2").textContent = "Overhead Archetype";
		document.getElementById("area1title").textContent = "Jaw, Head, and Neck";
		document.getElementById("area2title").textContent = "Arm";
		document.getElementById("archImg").src = overheadArchImgs[overheadArchIndex];
		document.getElementById("mov1img").src = jawHeadNeckImgs[jawHeadNeckIndex];
		document.getElementById("mov2img").src = armImgs[armIndex];
		break;
	case 2:
		document.getElementById("arch").textContent = squatArchRand;
		document.getElementById("area1").textContent = calfRand;
		document.getElementById("area2").textContent = adductorsRand;
		document.getElementById("archh2").textContent = "Squat Archetype";
		document.getElementById("area1title").textContent = "Calves";
		document.getElementById("area2title").textContent = "Adductors";
		document.getElementById("archImg").src = squatArchImgs[squatArchIndex]
		document.getElementById("mov1img").src = calfImgs[calfIndex]
		document.getElementById("mov2img").src = adductorsImgs[adductorsIndex]
		break;
	case 3:
		document.getElementById("arch").textContent = hangArchRand;
		document.getElementById("area1").textContent = upperBackRand;
		document.getElementById("area2").textContent = hamstringsRand;
		document.getElementById("archh2").textContent = "Hang Archetype";
		document.getElementById("area1title").textContent = "Upper Back";
		document.getElementById("area2title").textContent = "Hamstrings";
		document.getElementById("archImg").src = hangArchImgs[hangArchIndex]
		document.getElementById("mov1img").src = upperBackImgs[upperBackIndex]
		document.getElementById("mov2img").src = hamstringsImgs[hamstringsIndex]
		break;
	case 4:
		document.getElementById("arch").textContent = frontRackArchRand;
		document.getElementById("area1").textContent = trunkRand;
		document.getElementById("area2").textContent = kneeRand;
		document.getElementById("archh2").textContent = "Front Rack Archetype";
		document.getElementById("area1title").textContent = "Trunk";
		document.getElementById("area2title").textContent = "Knee";
		document.getElementById("archImg").src = frontRackArchImgs[frontRackArchIndex]
		document.getElementById("mov1img").src = trunkImgs[trunkIndex]
		document.getElementById("mov2img").src = kneeImgs[kneeIndex]
		break;
	case 5:
		document.getElementById("arch").textContent = pistolArchRand;
		document.getElementById("area1").textContent = shinRand;
		document.getElementById("area2").textContent = glutesRand;
		document.getElementById("archh2").textContent = "Pistol Archetype";
		document.getElementById("area1title").textContent = "Shin";
		document.getElementById("area2title").textContent = "Glutes and Hips";
		document.getElementById("archImg").src = pistolArchImgs[pistolArchIndex]
		document.getElementById("mov1img").src = shinImgs[shinIndex]
		document.getElementById("mov2img").src = glutesImgs[glutesIndex]
		break;
	case 6:
		document.getElementById("arch").textContent = lungeArchRand;
		document.getElementById("area1").textContent = ankleFootRand;
		document.getElementById("area2").textContent = hipFlexorsQuadsRand;
		document.getElementById("archh2").textContent = "Lunge Archetype";
		document.getElementById("area1title").textContent = "Ankle, Foot, and Toes";
		document.getElementById("area2title").textContent = "Hip Flexors and Quads";
		document.getElementById("archImg").src = lungeArchImgs[lungeArchIndex];
		document.getElementById("mov1img").src = ankleFootImgs[ankleFootIndex];
		document.getElementById("mov2img").src = hipFlexorsQuadsImgs[hipFlexorsQuadsIndex];
		break;
	case 0:
		document.getElementById("arch").textContent = pressArchRand;
		document.getElementById("area1").textContent = postShoulderRand;
		document.getElementById("area2").textContent = antShoulderRand;
		document.getElementById("archh2").textContent = "Press Archetype";
		document.getElementById("area1title").textContent = "Posterior Shoulder";
		document.getElementById("area2title").textContent = "Anterior Shoulder and Chest";
		document.getElementById("archImg").src = pressArchImgs[pressArchIndex]
		document.getElementById("mov1img").src = postShoulderImgs[postShoulderIndex]
		document.getElementById("mov2img").src = antShoulderImgs[antShoulderIndex]
		break;
}  



