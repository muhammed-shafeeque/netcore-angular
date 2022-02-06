import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netcore-angular';

  addForm : FormGroup;
  searchText = '';
  showCarList : any;
  firstName: any;
  brandName: any;
  autoPartsDetails : any;
  showautoParts: any;
  multiArray : Array<any> = [];
  

  constructor(private formBuilder : FormBuilder){
    this.addForm = this.formBuilder.group({
      'firstName' : ['',Validators.compose([Validators.required,Validators.maxLength(75),Validators.pattern('^[a-zA-Z \-\']+')])],
      'brand' : '',
      'autoParts' : new FormArray([]),
      'searchName' : ''
    });

    this.showCarList = this.carList;
    this.showautoParts = this.autoParts;
  }

  

  onCheckChange(event : any) {
    const formArray: FormArray = this.addForm.get('autoParts') as FormArray;
    formArray.push(new FormControl(event.target.value));

    this.multiArray.push(event.target.value);
  }

  applyFilter(event : any) {
    this.showCarList = this.carList.filter(x => x.brand.includes(event));
  }

  applyFilterparts(event : any){
    this.showautoParts = this.autoParts.filter(x => x.parts.includes(event));
  }


  onSubmit(zone : any){
    console.log('zone',zone)

    this.firstName = this.addForm.value.firstName;
    this.brandName = zone.brand[zone.brand.length - 1];
    this.autoPartsDetails = this.addForm.value.autoParts;
  }

  


  carList = [
    {
       "brand":"Seat"
    },
    {
       "brand":"Renault"
    },
    {
       "brand":"Peugeot"
    },
    {
       "brand":"Dacia"
    },
    {
       "brand":"Citroën"
    },
    {
       "brand":"Opel"
    },
    {
       "brand":"Alfa Romeo"
    },
    {
       "brand":"Škoda"
    },
    {
       "brand":"Chevrolet"
    },
    {
       "brand":"Porsche"
    },
    {
       "brand":"Honda"
    },
    {
       "brand":"Subaru"
    },
    {
       "brand":"Mazda"
    },
    {
       "brand":"Mitsubishi"
    },
    {
       "brand":"Lexus"
    },
    {
       "brand":"Toyota"
    },
    {
       "brand":"BMW"
    },
    {
       "brand":"Volkswagen"
    },
    {
       "brand":"Suzuki"
    },
    {
       "brand":"Mercedes-Benz"
    },
    {
       "brand":"Saab"
    },
    {
       "brand":"Audi"
    },
    {
       "brand":"Kia"
    },
    {
       "brand":"Land Rover"
    },
    {
       "brand":"Dodge"
    },
    {
       "brand":"Chrysler"
    },
    {
       "brand":"Ford"
    },
    {
       "brand":"Hummer"
    },
    {
       "brand":"Hyundai"
    },
    {
       "brand":"Infiniti"
    },
    {
       "brand":"Jaguar"
    },
    {
       "brand":"Jeep"
    },
    {
       "brand":"Nissan"
    },
    {
       "brand":"Volvo"
    },
    {
       "brand":"Daewoo"
    },
    {
       "brand":"Fiat"
    },
    {
       "brand":"MINI"
    },
    {
       "brand":"Rover"
    },
    {
       "brand":"Smart"
    }
 ];


 autoParts = [
  {
    "parts": "Bonnet/hood"
  },
  {
    "parts": "Bonnet/hood latch"
  },
  {
    "parts": "Bumper"
  },
  {
    "parts": "Unexposed bumper"
  },
  {
    "parts": "Exposed bumper"
  },
  {
    "parts": "Cowl screen"
  },
  {
    "parts": "Decklid"
  },
  {
    "parts": "Fascia rear and support"
  },
  {
    "parts": "Fender (wing or mudguard)"
  },
  {
    "parts": "Front clip"
  },
  {
    "parts": "Front fascia and header panel"
  },
  {
    "parts": "Grille (also called grill)"
  },
  {
    "parts": "Pillar and hard trim"
  },
  {
    "parts": "Quarter panel"
  },
  {
    "parts": "Radiator core support"
  },
  {
    "parts": "Rocker panel"
  },
  {
    "parts": "Roof rack"
  },
  {
    "parts": "Spoiler"
  },
  {
    "parts": "Front spoiler (air dam)"
  },
  {
    "parts": "Rear spoiler (wing)"
  },
  {
    "parts": "Rims"
  },
  {
    "parts": "Hubcap"
  },
  {
    "parts": "Tire/Tyre"
  },
  {
    "parts": "Trim package"
  },
  {
    "parts": "Trunk/boot/hatch"
  },
  {
    "parts": "Trunk/boot latch"
  },
  {
    "parts": "Valance"
  },
  {
    "parts": "Welded assembly"
  },
  {
    "parts": "Outer door handle"
  },
  {
    "parts": "Inner door handle"
  },
  {
    "parts": "Door control module"
  },
  {
    "parts": "Door seal"
  },
  {
    "parts": "Door watershield"
  },
  {
    "parts": "Hinge"
  },
  {
    "parts": "Door latch"
  },
  {
    "parts": "Door lock and power door locks"
  },
  {
    "parts": "Center-locking"
  },
  {
    "parts": "Fuel tank (or fuel filler) door"
  },
  {
    "parts": "Glass"
  },
  {
    "parts": "Sunroof"
  },
  {
    "parts": "Sunroof motor"
  },
  {
    "parts": "Window motor"
  },
  {
    "parts": "Window regulator"
  },
  {
    "parts": "Windshield (also called windscreen)"
  },
  {
    "parts": "Windshield washer motor"
  },
  {
    "parts": "Window seal"
  },
  {
    "parts": "Antenna assembly"
  },
  {
    "parts": "Antenna cable"
  },
  {
    "parts": "Radio and media player"
  },
  {
    "parts": "Other devices"
  },
  {
    "parts": "Speaker"
  },
  {
    "parts": "Tuner"
  },
  {
    "parts": "Subwoofer"
  },
  {
    "parts": "Alternator"
  },
  {
    "parts": "Alternator bearing"
  },
  {
    "parts": "Alternator bracket"
  },
  {
    "parts": "Alternator fan"
  },
  {
    "parts": "Other alternator parts"
  },
  {
    "parts": "Battery"
  },
  {
    "parts": "Performance battery"
  },
  {
    "parts": "Battery box"
  },
  {
    "parts": "Battery cable terminal"
  },
  {
    "parts": "Battery cable"
  },
  {
    "parts": "Battery control system"
  },
  {
    "parts": "Battery plate"
  },
  {
    "parts": "Battery tray"
  },
  {
    "parts": "Voltage regulator"
  },
  {
    "parts": "Ammeter"
  },
  {
    "parts": "Clinometer"
  },
  {
    "parts": "Dynamometer"
  },
  {
    "parts": "Fuel gauge"
  },
  {
    "parts": "Hydrometer"
  },
  {
    "parts": "Odometer (also called milometer or mileometers)"
  },
  {
    "parts": "Speedometer"
  },
  {
    "parts": "Tachometer (also called rev counters)"
  },
  {
    "parts": "Temperature gauge"
  },
  {
    "parts": "Tire pressure gauge"
  },
  {
    "parts": "Vacuum gauge"
  },
  {
    "parts": "Voltmeter"
  },
  {
    "parts": "Water temperature meter"
  },
  {
    "parts": "Coil wire"
  },
  {
    "parts": "Distributor"
  },
  {
    "parts": "Electronic timing controller"
  },
  {
    "parts": "Ignition box"
  },
  {
    "parts": "Ignition coil"
  },
  {
    "parts": "Ignition coil parts"
  },
  {
    "parts": "Ignition magneto"
  },
  {
    "parts": "Spark plug"
  },
  {
    "parts": "Engine bay lighting"
  },
  {
    "parts": "Fog light (also called foglamp)"
  },
  {
    "parts": "Halogen"
  },
  {
    "parts": "Headlight (also called headlamp)"
  },
  {
    "parts": "Headlight motor"
  },
  {
    "parts": "Interior light and lamp"
  },
  {
    "parts": "License plate lamp (also called number plate lamp or registration plate lamp)"
  },
  {
    "parts": "Side lighting"
  },
  {
    "parts": "Tail light"
  },
  {
    "parts": "Tail light cover"
  },
  {
    "parts": "Airbag sensors"
  },
  {
    "parts": "Automatic transmission speed sensor"
  },
  {
    "parts": "Camshaft position sensor"
  },
  {
    "parts": "Coolant temperature sensor"
  },
  {
    "parts": "Crankshaft position sensor"
  },
  {
    "parts": "Engine sensor"
  },
  {
    "parts": "Fuel level sensor"
  },
  {
    "parts": "Fuel Pressure sensor"
  },
  {
    "parts": "Knock sensor"
  },
  {
    "parts": "Light sensor"
  },
  {
    "parts": "Oil level sensor"
  },
  {
    "parts": "Oil pressure sensor"
  },
  {
    "parts": "Mass flow sensor"
  },
  {
    "parts": "Starter"
  },
  {
    "parts": "Starter drive"
  },
  {
    "parts": "Starter motor"
  },
  {
    "parts": "Starter solenoid"
  },
  {
    "parts": "Glowplug"
  },
  {
    "parts": "Battery"
  },
  {
    "parts": "Door switch"
  },
  {
    "parts": "Ignition switch"
  },
  {
    "parts": "Power window switch"
  },
  {
    "parts": "Steering column switch"
  },
  {
    "parts": "Switch cover"
  },
  {
    "parts": "Switch panel"
  },
  {
    "parts": "Thermostat"
  },
  {
    "parts": "Frame switch"
  },
  {
    "parts": "Parts and functions of starter system"
  },
  {
    "parts": "Air conditioning harness"
  },
  {
    "parts": "Engine compartment harness"
  },
  {
    "parts": "Interior harness"
  },
  {
    "parts": "Main harness"
  },
  {
    "parts": "floor harness"
  },
  {
    "parts": "control harness"
  },
  {
    "parts": "Air bag control module"
  },
  {
    "parts": "Alarm and siren"
  },
  {
    "parts": "Central locking system"
  },
  {
    "parts": "Chassis control computer"
  },
  {
    "parts": "Cruise control computer"
  },
  {
    "parts": "Door contact"
  },
  {
    "parts": "Engine computer and management system"
  },
  {
    "parts": "Engine control unit"
  },
  {
    "parts": "Fuse"
  },
  {
    "parts": "Fuse box"
  },
  {
    "parts": "Ground strap"
  },
  {
    "parts": "Grab Handle (aka \"Oh S***\" Handle)"
  },
  {
    "parts": "Performance chip"
  },
  {
    "parts": "Performance monitor"
  },
  {
    "parts": "Relay connector"
  },
  {
    "parts": "Remote lock"
  },
  {
    "parts": "Shift improver"
  },
  {
    "parts": "Speed controller"
  },
  {
    "parts": "Speedometer calibrator"
  },
  {
    "parts": "Transmission computer"
  },
  {
    "parts": "Wiring connector"
  },
  {
    "parts": "Dash Panels"
  },
  {
    "parts": "Carpet and other floor material"
  },
  {
    "parts": "Center console (front and rear)"
  },
  {
    "parts": "Trap (secret compartment)"
  },
  {
    "parts": "Arm Rest"
  },
  {
    "parts": "Bench seat"
  },
  {
    "parts": "Bucket seat"
  },
  {
    "parts": "Children and baby car seat"
  },
  {
    "parts": "Fastener"
  },
  {
    "parts": "Headrest"
  },
  {
    "parts": "Seat belt"
  },
  {
    "parts": "Seat bracket"
  },
  {
    "parts": "Seat cover"
  },
  {
    "parts": "Seat track"
  },
  {
    "parts": "Other seat components"
  },
  {
    "parts": "Anti-lock braking system (ABS)"
  },
  {
    "parts": "ABS steel pin"
  },
  {
    "parts": "Adjusting mechanism (adjuster star wheel)"
  },
  {
    "parts": "Anchor"
  },
  {
    "parts": "Bleed nipple"
  },
  {
    "parts": "Brake backing plate"
  },
  {
    "parts": "Brake backing pad"
  },
  {
    "parts": "Brake cooling duct"
  },
  {
    "parts": "Brake disc"
  },
  {
    "parts": "Brake drum"
  },
  {
    "parts": "Brake line/Cable"
  },
  {
    "parts": "Brake pad"
  },
  {
    "parts": "Brake pedal"
  },
  {
    "parts": "Brake piston"
  },
  {
    "parts": "Brake pump"
  },
  {
    "parts": "Brake roll"
  },
  {
    "parts": "Brake rotor"
  },
  {
    "parts": "Brake servo"
  },
  {
    "parts": "Brake shoe"
  },
  {
    "parts": "Brake lining"
  },
  {
    "parts": "Shoe web"
  },
  {
    "parts": "Brake warning light"
  },
  {
    "parts": "Calibrated friction brake"
  },
  {
    "parts": "Caliper"
  },
  {
    "parts": "Combination valve"
  },
  {
    "parts": "Dual circuit brake system"
  },
  {
    "parts": "Hold-down springs (retainer springs)"
  },
  {
    "parts": "Hose"
  },
  {
    "parts": "Brake booster hose"
  },
  {
    "parts": "Air brake nylon hose"
  },
  {
    "parts": "Brake duct hose"
  },
  {
    "parts": "Hydraulic booster unit"
  },
  {
    "parts": "Load-sensing valve"
  },
  {
    "parts": "Master cylinder"
  },
  {
    "parts": "Metering valve"
  },
  {
    "parts": "Other braking system parts"
  },
  {
    "parts": "Park brake lever/handle (hand brake)"
  },
  {
    "parts": "Pressure differential valve"
  },
  {
    "parts": "Proportioning valve"
  },
  {
    "parts": "Reservoir"
  },
  {
    "parts": "Shoe return spring"
  },
  {
    "parts": "Tyre"
  },
  {
    "parts": "Vacuum brake booster"
  },
  {
    "parts": "Wheel cylinder (slave cylinder)"
  },
  {
    "parts": "Wheel stud"
  },
  {
    "parts": "Diesel engine"
  },
  {
    "parts": "petrol engine (gasoline engine)"
  },
  {
    "parts": "Accessory belt"
  },
  {
    "parts": "Air duct"
  },
  {
    "parts": "Air intake housing"
  },
  {
    "parts": "Air intake manifold"
  },
  {
    "parts": "Camshaft"
  },
  {
    "parts": "Camshaft bearing"
  },
  {
    "parts": "Camshaft fastener"
  },
  {
    "parts": "Camshaft follower"
  },
  {
    "parts": "Camshaft locking plate"
  },
  {
    "parts": "Camshaft pushrod"
  },
  {
    "parts": "Camshaft spacer ring"
  },
  {
    "parts": "Connecting rod"
  },
  {
    "parts": "Connecting rod bearing"
  },
  {
    "parts": "Connecting rod bolt"
  },
  {
    "parts": "Connecting rod washer"
  },
  {
    "parts": "Crank case"
  },
  {
    "parts": "Crank pulley"
  },
  {
    "parts": "Crankshaft"
  },
  {
    "parts": "Crankshaft oil seal"
  },
  {
    "parts": "Cylinder head"
  },
  {
    "parts": "Cylinder head cover"
  },
  {
    "parts": "Other cylinder head cover parts"
  },
  {
    "parts": "Cylinder head gasket"
  },
  {
    "parts": "Distributor"
  },
  {
    "parts": "Distributor cap"
  },
  {
    "parts": "Drive belt"
  },
  {
    "parts": "Engine block"
  },
  {
    "parts": "Engine block"
  },
  {
    "parts": "Engine cradle"
  },
  {
    "parts": "Engine shake damper and vibration absorber"
  },
  {
    "parts": "Engine valve"
  },
  {
    "parts": "Fan belt"
  },
  {
    "parts": "Gudgeon pin (wrist pin)"
  },
  {
    "parts": "Harmonic balancer"
  },
  {
    "parts": "Heater"
  },
  {
    "parts": "Mounting"
  },
  {
    "parts": "Piston"
  },
  {
    "parts": "Piston pin and crank pin"
  },
  {
    "parts": "Piston pin bush"
  },
  {
    "parts": "Piston ring and circlip"
  },
  {
    "parts": "Poppet valve"
  },
  {
    "parts": "PCV valve (positive crankcase ventilation valve)"
  },
  {
    "parts": "Pulley part"
  },
  {
    "parts": "Rocker arm"
  },
  {
    "parts": "Rocker cover"
  },
  {
    "parts": "Starter motor"
  },
  {
    "parts": "Starter pinion"
  },
  {
    "parts": "Starter ring"
  },
  {
    "parts": "Turbocharger and supercharger"
  },
  {
    "parts": "Tappet"
  },
  {
    "parts": "Timing tape"
  },
  {
    "parts": "Valve cover"
  },
  {
    "parts": "Valve housing"
  },
  {
    "parts": "Valve spring"
  },
  {
    "parts": "Valve stem seal"
  },
  {
    "parts": "Water pump pulley"
  },
  {
    "parts": "Air blower"
  },
  {
    "parts": "Coolant hose (clamp)"
  },
  {
    "parts": "Cooling fan"
  },
  {
    "parts": "Fan blade"
  },
  {
    "parts": "Fan clutch"
  },
  {
    "parts": "Radiator"
  },
  {
    "parts": "Radiator bolt"
  },
  {
    "parts": "Radiator (fan) shroud"
  },
  {
    "parts": "Radiator gasket"
  },
  {
    "parts": "Radiator pressure cap"
  },
  {
    "parts": "Overflow tank"
  },
  {
    "parts": "Water neck"
  },
  {
    "parts": "Water neck o-ring"
  },
  {
    "parts": "Water pipe"
  },
  {
    "parts": "Water pump"
  },
  {
    "parts": "Water pump gasket"
  },
  {
    "parts": "Water tank"
  },
  {
    "parts": "Oil filter"
  },
  {
    "parts": "Oil gasket"
  },
  {
    "parts": "Oil pan"
  },
  {
    "parts": "Oil pipe"
  },
  {
    "parts": "Oil pump"
  },
  {
    "parts": "Oil strainer"
  },
  {
    "parts": "Catalytic converter"
  },
  {
    "parts": "Exhaust clamp and bracket"
  },
  {
    "parts": "Exhaust flange gasket"
  },
  {
    "parts": "Exhaust gasket"
  },
  {
    "parts": "Exhaust manifold"
  },
  {
    "parts": "Exhaust manifold gasket"
  },
  {
    "parts": "Exhaust pipe"
  },
  {
    "parts": "Heat shield"
  },
  {
    "parts": "Heat sleeving and tape"
  },
  {
    "parts": "Resonator"
  },
  {
    "parts": "Muffler (silencer)"
  },
  {
    "parts": "Spacer ring"
  },
  {
    "parts": "ely"
  },
  {
    "parts": "Air filter"
  },
  {
    "parts": "Carburetor"
  },
  {
    "parts": "Carburetor parts"
  },
  {
    "parts": "Choke cable"
  },
  {
    "parts": "EGR valve"
  },
  {
    "parts": "Fuel cap"
  },
  {
    "parts": "Fuel cell"
  },
  {
    "parts": "Fuel cell component"
  },
  {
    "parts": "Fuel cooler"
  },
  {
    "parts": "Fuel distributor"
  },
  {
    "parts": "Fuel filter"
  },
  {
    "parts": "Fuel filter seal"
  },
  {
    "parts": "Fuel injector"
  },
  {
    "parts": "Fuel injector nozzle"
  },
  {
    "parts": "Fuel pump"
  },
  {
    "parts": "Fuel pump gasket"
  },
  {
    "parts": "Fuel pressure regulator"
  },
  {
    "parts": "Fuel rail"
  },
  {
    "parts": "Fuel tank"
  },
  {
    "parts": "Fuel tank cover"
  },
  {
    "parts": "Fuel water separator"
  },
  {
    "parts": "Intake manifold"
  },
  {
    "parts": "Intake manifold gasket"
  },
  {
    "parts": "LPG (Liquefied petroleum gas) system assembly"
  },
  {
    "parts": "Throttle body"
  },
  {
    "parts": "Beam axle"
  },
  {
    "parts": "Control arm"
  },
  {
    "parts": "Constant-velocity axle"
  },
  {
    "parts": "Constant-velocity joint"
  },
  {
    "parts": "Idler arm"
  },
  {
    "parts": "Kingpin"
  },
  {
    "parts": "Panhard rod"
  },
  {
    "parts": "Pitman arm"
  },
  {
    "parts": "Power steering assembly and component"
  },
  {
    "parts": "Rack end"
  },
  {
    "parts": "Shock absorber"
  },
  {
    "parts": "Spindle"
  },
  {
    "parts": "Spring"
  },
  {
    "parts": "Air spring"
  },
  {
    "parts": "Coil spring"
  },
  {
    "parts": "Leaf and parabolic leaf spring"
  },
  {
    "parts": "Rubber spring"
  },
  {
    "parts": "Spiral spring"
  },
  {
    "parts": "Stabilizer bars and link"
  },
  {
    "parts": "Steering arm"
  },
  {
    "parts": "Steering box"
  },
  {
    "parts": "Steering column assembly"
  },
  {
    "parts": "Steering rack (a form of steering gear"
  },
  {
    "parts": "Steering shaft"
  },
  {
    "parts": "Steering wheel (driving wheel)"
  },
  {
    "parts": "Strut"
  },
  {
    "parts": "Stub axle"
  },
  {
    "parts": "Suspension link and bolt"
  },
  {
    "parts": "Tie bar"
  },
  {
    "parts": "Tie rod"
  },
  {
    "parts": "Tie rod end"
  },
  {
    "parts": "Trailing arm"
  },
  {
    "parts": "Adjustable pedal"
  },
  {
    "parts": "Axle shaft"
  },
  {
    "parts": "Bell housing"
  },
  {
    "parts": "Cam belt"
  },
  {
    "parts": "Other belts"
  },
  {
    "parts": "Carrier assembly"
  },
  {
    "parts": "Chain wheel and sprocket"
  },
  {
    "parts": "Clutch assembly"
  },
  {
    "parts": "Clutch cable"
  },
  {
    "parts": "Clutch disk"
  },
  {
    "parts": "Clutch fan"
  },
  {
    "parts": "Clutch fork"
  },
  {
    "parts": "Clutch hose"
  },
  {
    "parts": "Clutch lever"
  },
  {
    "parts": "Clutch lining"
  },
  {
    "parts": "Clutch pedal"
  },
  {
    "parts": "Clutch pressure plate"
  },
  {
    "parts": "Clutch shoe"
  },
  {
    "parts": "Clutch spring"
  },
  {
    "parts": "Differential"
  },
  {
    "parts": "Differential case"
  },
  {
    "parts": "Pinion bearing"
  },
  {
    "parts": "Differential clutch"
  },
  {
    "parts": "Spider gears"
  },
  {
    "parts": "Differential casing"
  },
  {
    "parts": "Differential flange"
  },
  {
    "parts": "Differential gear"
  },
  {
    "parts": "Differential seal"
  },
  {
    "parts": "Flywheel"
  },
  {
    "parts": "Flywheel ring gear"
  },
  {
    "parts": "Gear"
  },
  {
    "parts": "Gear coupling"
  },
  {
    "parts": "Gear pump"
  },
  {
    "parts": "Gear ring"
  },
  {
    "parts": "Gear stick (gearstick"
  },
  {
    "parts": "gear lever"
  },
  {
    "parts": "selection lever"
  },
  {
    "parts": "shift stick"
  },
  {
    "parts": "gear shifter)"
  },
  {
    "parts": "Gearbox"
  },
  {
    "parts": "Idler gear"
  },
  {
    "parts": "Knuckle"
  },
  {
    "parts": "Master cylinder"
  },
  {
    "parts": "Output shaft"
  },
  {
    "parts": "Pinion"
  },
  {
    "parts": "Planetary gear set"
  },
  {
    "parts": "Prop shaft (drive shaft"
  },
  {
    "parts": "propeller shaft)"
  },
  {
    "parts": "Shift cable"
  },
  {
    "parts": "Shift fork"
  },
  {
    "parts": "Shift knob"
  },
  {
    "parts": "Shift lever"
  },
  {
    "parts": "Slave cylinder"
  },
  {
    "parts": "Speed reducer"
  },
  {
    "parts": "Speedometer gear"
  },
  {
    "parts": "Steering gear"
  },
  {
    "parts": "Torque converter"
  },
  {
    "parts": "Transaxle housing"
  },
  {
    "parts": "Transfer case"
  },
  {
    "parts": "Transmission gear"
  },
  {
    "parts": "Transmission pan"
  },
  {
    "parts": "Transmission seal and bonded piston"
  },
  {
    "parts": "Transmission spring"
  },
  {
    "parts": "Transmission yolk"
  },
  {
    "parts": "Universal joint (UJ"
  },
  {
    "parts": "cardan joint)"
  },
  {
    "parts": "A/C clutch"
  },
  {
    "parts": "A/C compressor"
  },
  {
    "parts": "A/C condenser"
  },
  {
    "parts": "A/C hose"
  },
  {
    "parts": "A/C kit"
  },
  {
    "parts": "A/C relay"
  },
  {
    "parts": "A/C valve"
  },
  {
    "parts": "A/C expansion valve"
  },
  {
    "parts": "A/C low-pressure valve"
  },
  {
    "parts": "A/C schrader valve"
  },
  {
    "parts": "A/C INNER PLATE"
  },
  {
    "parts": "A/C COOLER"
  },
  {
    "parts": "A/C Evaporator"
  },
  {
    "parts": "Ball joint"
  },
  {
    "parts": "Grooved ball bearing"
  },
  {
    "parts": "Needle bearing"
  },
  {
    "parts": "Roller bearing"
  },
  {
    "parts": "Sleeve bearing"
  },
  {
    "parts": "Fuel vapour hose"
  },
  {
    "parts": "Reinforced hose (high-pressure hose)"
  },
  {
    "parts": "Non-reinforced hose"
  },
  {
    "parts": "Washer hose"
  },
  {
    "parts": "Adhesive tape and foil"
  },
  {
    "parts": "Air bag"
  },
  {
    "parts": "Bolt cap"
  },
  {
    "parts": "Bracket (aluminium"
  },
  {
    "parts": "iron"
  },
  {
    "parts": "and magnesium bracket)"
  },
  {
    "parts": "License plate bracket"
  },
  {
    "parts": "Cables"
  },
  {
    "parts": "Speedometer cable"
  },
  {
    "parts": "Cotter pin"
  },
  {
    "parts": "Decal"
  },
  {
    "parts": "Dashboard"
  },
  {
    "parts": "Center console"
  },
  {
    "parts": "Glove compartment"
  },
  {
    "parts": "Drag link"
  },
  {
    "parts": "Dynamic seal"
  },
  {
    "parts": "Fastener"
  },
  {
    "parts": "Gasket: Flat"
  },
  {
    "parts": "moulded"
  },
  {
    "parts": "profiled"
  },
  {
    "parts": "Hood and trunk release cable"
  },
  {
    "parts": "Horn and trumpet horn"
  },
  {
    "parts": "Injection-molded parts"
  },
  {
    "parts": "Instrument cluster"
  },
  {
    "parts": "Label"
  },
  {
    "parts": "Mirror"
  },
  {
    "parts": "Mount and mounting"
  },
  {
    "parts": "Name plate"
  },
  {
    "parts": "Nut"
  },
  {
    "parts": "Flange nut"
  },
  {
    "parts": "Hex nut"
  },
  {
    "parts": "O-ring"
  },
  {
    "parts": "Paint"
  },
  {
    "parts": "Rivet"
  },
  {
    "parts": "Rubber (extruded and molded)"
  },
  {
    "parts": "Screw"
  },
  {
    "parts": "Shim"
  },
  {
    "parts": "Sun visor"
  },
  {
    "parts": "Washer"
  }
]

}
