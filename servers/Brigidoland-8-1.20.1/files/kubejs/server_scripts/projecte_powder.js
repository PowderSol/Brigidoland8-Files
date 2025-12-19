ServerEvents.recipes(e => {
e.remove({output: 'projecte:philosophers_stone'})
e.shaped(
        Item.of('projecte:philosophers_stone'),
        [
            'EAE',
            'DFB',
            'ECE'
        ], {
            A: 'twilightforest:snow_queen_trophy',
            B: 'undergarden:forgotten_ingot',
            C: 'botania:gaia_ingot',
            D: 'aquaculture:neptunium_ingot',
            E: 'iceandfire:fire_dragon_blood',
            F: 'projectexpansion:magenta_fuel_block',
            }
        )

e.remove({output: 'projecte:swiftwolf_rending_gale'})
e.shaped(
        Item.of('projecte:swiftwolf_rending_gale'),
        [
            'DAD',
            'BEB',
            'DCD'
        ], {
            A: 'botania:flight_tiara',
            B: 'minecraft:elytra',
            C: 'mekanism:jetpack',
            D: 'projecte:dark_matter',
            E: 'projecte:iron_band',
            }
        )

e.remove({output: 'projecte:condenser_mk1'})
e.shaped(
        Item.of('projecte:condenser_mk1'),
        [
            'BAB',
            'ACA',
            'BAB'
        ], {
            A: 'minecraft:diamond',
            B: 'projecte:dark_matter_block',
            C: 'projecte:alchemical_chest',
            }
        )

const items_para_borrar = [
    'mekanism:atomic_disassembler',
    'mekanism:meka_tool',
    'mekanism:flamethrower',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots',
    
]
items_para_borrar.forEach(item => {
e.remove({output: item});
});

    }
)
