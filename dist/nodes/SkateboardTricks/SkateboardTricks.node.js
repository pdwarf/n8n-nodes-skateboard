"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkateboardTricks = void 0;
class SkateboardTricks {
    constructor() {
        this.description = {
            displayName: 'Skateboard Tricks',
            name: 'skateboardTricks',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"]}}', description: 'Appends a random skateboard trick name to each input item',
            defaults: {
                name: 'Skateboard Tricks',
            },
            inputs: ['main'],
            icon: { light: 'file:icons/skateboard.svg', dark: 'file:icons/skateboard-dark.svg' },
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Append Random Trick',
                            value: 'appendRandomTrick',
                            action: 'Appends a random skateboard trick',
                        },
                    ],
                    default: 'appendRandomTrick',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const tricks = [
            'Ollie',
            'Kickflip',
            'Heelflip',
            'Tre Flip',
            'Varial Kickflip',
            'Varial Heelflip',
            'Laser Flip',
            'Hardflip',
            'Inward Heelflip',
            'Bigspin',
            'Frontside 180',
            'Backside 180',
            'Shove-it',
            'Pop Shove-it',
        ];
        for (let i = 0; i < items.length; i++) {
            const randomTrick = tricks[Math.floor(Math.random() * tricks.length)];
            returnData.push({
                json: {
                    ...items[i].json,
                    randomTrick,
                },
            });
        }
        return [returnData];
    }
}
exports.SkateboardTricks = SkateboardTricks;
//# sourceMappingURL=SkateboardTricks.node.js.map